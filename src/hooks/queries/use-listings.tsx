import { useQuery } from "@tanstack/react-query";
import { getListings } from "../../services/listings";

export const LISTINGS = "LISTINGS";

export function useListings(args: { searchTerm?: string }) {
  return useQuery({
    queryKey: [LISTINGS, args.searchTerm],
    queryFn: () => getListings(args.searchTerm),
  });
}
