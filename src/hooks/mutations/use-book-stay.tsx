import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../query-client";
import { STAYS } from "../queries/use-stays";
import { STAY_COUNT } from "../queries/use-stay-count";
import { UNAVAILABLE_DATES } from "../queries/use-unavailable-dates";
import { bookStay } from "../../services/stays";

export function useBookStay() {
  return useMutation({
    mutationFn: bookStay,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [STAYS],
      });
      queryClient.invalidateQueries({
        queryKey: [STAY_COUNT],
      });
      queryClient.invalidateQueries({
        queryKey: [UNAVAILABLE_DATES],
      });
    },
  });
}
