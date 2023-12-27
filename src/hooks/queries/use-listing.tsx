import { useQuery } from "@tanstack/react-query";
import { getListing } from "../../services/listings";

export const LISTING = "LISTING";

export type UseListingProps = {
  id: string;
};
export function useListing(props: UseListingProps) {
  const { id } = props;
  return useQuery({
    queryKey: [LISTING, id],
    queryFn: () => getListing(id),
  });
}
