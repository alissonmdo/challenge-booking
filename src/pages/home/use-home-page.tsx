import { useSearchParams } from "react-router-dom";
import { useListings } from "../../hooks/queries/use-listings";
import { useUnavailableDates } from "../../hooks/queries/use-unavailable-dates";
import { useState } from "react";

export function useHomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") ?? "";
  const setSearchTerm = (searchTerm: string) => {
    setSearchParams({ searchTerm });
  };
  const [dateRange, setDateRange] = useState<[string, string] | null>(null);
  const { data: listings, isLoading: isLoadingListings } = useListings({
    searchTerm,
  });
  const { data: unavailableDates, isLoading: isLoadingUnavailableDates } =
    useUnavailableDates();
  return {
    unavailableDates,
    isLoadingUnavailableDates,
    listings,
    isLoadingListings,
    searchTerm,
    setSearchTerm,
    dateRange,
    setDateRange,
  };
}
