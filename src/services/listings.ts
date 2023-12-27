import { api } from "../api";

export async function getListings(searchTerm?: string) {
  return api.listings.getAll(searchTerm);
}

export async function getListing(id: string) {
  return api.listings.getOne(id);
}
