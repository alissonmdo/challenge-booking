import dayjs from "dayjs";
import { StayDTO, ListingDTO } from ".";

export const api = {
  listings: {
    getAll: async (search?: string) => {
      await delay();
      const response = await fetch("/api/listings.json");
      const listings = (await response.json()) as ListingDTO[];
      if (!search) {
        return listings;
      }
      const lowerCaseSearch = search.toLowerCase();
      return listings.filter(
        (listing) =>
          listing.title.toLowerCase().includes(lowerCaseSearch) ||
          listing.city.toLowerCase().includes(lowerCaseSearch) ||
          listing.state.toLowerCase().includes(lowerCaseSearch)
      );
    },
    getOne: async (id: string) => {
      await delay();
      const response = await fetch("/api/listings.json");
      const listings = (await response.json()) as ListingDTO[];
      return listings.find((listing) => listing.id === id) ?? null;
    },
  },
  stays: {
    getUnavailableDates: async () => {
      await delay();
      const stays = getStays();
      const dateRanges: string[][] = [];
      stays.forEach((s) => {
        dateRanges.push([s.checkInDate, s.checkOutDate]);
      });
      return dateRanges;
    },

    countStays: async (status?: "upcoming" | "past") => {
      await delay();
      const stays = getStays();
      if (!status) {
        return stays.length;
      }
      const currentDay = dayjs().format("YYYY-MM-DD");

      if (status === "upcoming") {
        return stays.filter((stay) => stay.checkInDate > currentDay).length;
      }
      return stays.filter((stay) => stay.checkOutDate < currentDay).length;
    },
    getStays: async () => {
      await delay();
      const stays = getStays();
      stays.sort((a, b) => (a.checkInDate > b.checkInDate ? -1 : 1));
      return stays;
    },
    cancelStay: async (id: string) => {
      await delay();
      const stays = getStays();
      const updatedStays = stays.filter((stay) => stay.id !== id);
      localStorage.setItem("stays", JSON.stringify(updatedStays));
    },
    bookStay: async (stay: StayDTO) => {
      await delay();
      const stays = getStays();
      stays.push(stay);
      localStorage.setItem("stays", JSON.stringify(stays));
      return stay;
    },
  },
};

function getStays() {
  const stays = localStorage.getItem("stays");
  if (!stays) {
    localStorage.setItem("stays", JSON.stringify([]));
    return [];
  }
  return JSON.parse(stays) as StayDTO[];
}

async function delay(ms?: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms ?? Math.random() * 1000)
  );
}
