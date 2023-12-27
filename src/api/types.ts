export type ListingDTO = {
  id: string;
  title: string;
  city: string;
  state: string;
  rating: number;
  bedAmount: number;
  hasAirConditioner: boolean;
  hasPool: boolean;
  hasKitchen: boolean;
};

export type StayDTO = {
  id: string;
  listingId: string;
  checkInDate: string;
  checkOutDate: string;
};
