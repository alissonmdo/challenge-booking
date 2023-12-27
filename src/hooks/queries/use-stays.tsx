import { useQuery } from "@tanstack/react-query";
import { getStays } from "../../services/stays";

export const STAYS = "STAYS";

export function useStays() {
  return useQuery({
    queryKey: [STAYS],
    queryFn: getStays,
  });
}
