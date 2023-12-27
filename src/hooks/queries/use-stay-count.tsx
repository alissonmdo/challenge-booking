import { useQuery } from "@tanstack/react-query";
import { countStays } from "../../services/stays";

export const STAY_COUNT = "STAY_COUNT";

export type UseStayCountProps = {
  status?: "upcoming" | "past";
};

export function useStayCount(props?: UseStayCountProps) {
  return useQuery({
    queryKey: [STAY_COUNT, props?.status],
    queryFn: () => countStays(props?.status),
  });
}
