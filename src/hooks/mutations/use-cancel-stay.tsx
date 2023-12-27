import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../query-client";
import { STAYS } from "../queries/use-stays";
import { STAY_COUNT } from "../queries/use-stay-count";
import { UNAVAILABLE_DATES } from "../queries/use-unavailable-dates";
import { cancelStay } from "../../services/stays";

export function useCancelStay() {
  return useMutation({
    mutationFn: cancelStay,
    onSettled: () => {
      queryClient.resetQueries({
        queryKey: [STAYS],
      });
      queryClient.resetQueries({
        queryKey: [STAY_COUNT],
      });
      queryClient.resetQueries({
        queryKey: [UNAVAILABLE_DATES],
      });
    },
  });
}
