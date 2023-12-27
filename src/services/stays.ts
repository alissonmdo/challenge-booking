import { StayDTO, api } from "../api";

export async function getStays() {
  return api.stays.getStays();
}

export async function countStays(status?: "upcoming" | "past") {
  return api.stays.countStays(status);
}

export async function bookStay(stay: Omit<StayDTO, "id">) {
  return api.stays.bookStay({
    ...stay,
    id: Math.random().toString(),
  });
}

export async function cancelStay(id: string) {
  return api.stays.cancelStay(id);
}

export async function getUnavailableDates() {
  return api.stays.getUnavailableDates();
}
