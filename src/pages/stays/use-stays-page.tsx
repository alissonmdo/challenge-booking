import dayjs from "dayjs";
import { useStays } from "../../hooks/queries/use-stays";

export function useStaysPage() {
  const {
    data: stays,
    isLoading: isLoadingStays,
    isError: isErrorStays,
  } = useStays();
  // YYYY-MM-DD
  const currentDay = dayjs().format("YYYY-MM-DD");

  return {
    isLoadingStays,
    isErrorStays,
    upcomingStays: stays?.filter((stay) => stay.checkInDate >= currentDay),
    pastStays: stays?.filter((stay) => stay.checkInDate < currentDay),
  };
}
