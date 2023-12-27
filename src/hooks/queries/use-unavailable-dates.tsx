import { useQuery } from "@tanstack/react-query";
import { getUnavailableDates } from "../../services/stays";

export const UNAVAILABLE_DATES = "UNAVAILABLE_DATES";

export function useUnavailableDates() {
  return useQuery({
    queryKey: [UNAVAILABLE_DATES],
    queryFn: getUnavailableDates,
  });
}
