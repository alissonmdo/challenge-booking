import {
  IconAirConditioning,
  IconPool,
  IconToolsKitchen,
} from "@tabler/icons-react";
import { StayDTO } from "../api";
import { useListing } from "../hooks/queries/use-listing";
import dayjs from "dayjs";
import { useCancelStay } from "../hooks/mutations/use-cancel-stay";

export type StayCardProps = {
  stay: StayDTO;
  isUpcoming?: boolean;
};

/** A Booked stay */
export function StayCard(props: StayCardProps) {
  const { stay, isUpcoming } = props;
  const { data: listing } = useListing({
    id: stay.listingId,
  });
  const { mutate: cancelStay, isPending: isCancelingStay } = useCancelStay();
  return (
    <div className="flex bg-base-100 rounded-box p-4 max-w-[100vw] w-[640px]">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex md:items-center gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <div
                className={`text-xl font-bold w-full text-left ${
                  listing ? "" : "skeleton h-6"
                }`}
              >
                {listing ? listing.city + ", " + listing.state : null}
              </div>
            </div>
            <div className={`flex-1 ${listing ? "" : "skeleton h-6"}`}>
              <div className="tooltip md:w-full" data-tip={listing?.title}>
                <div className="text-sm font-semibold line-clamp-2 text-right">
                  {listing?.title}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="text-sm">
              {dayjs(stay.checkInDate).format("ddd, MMM D")} -{" "}
              {dayjs(stay.checkOutDate).format("ddd, MMM D")}
            </div>
            <div className="flex-1 flex justify-end gap-4">
              {listing ? null : <div className="skeleton w-20 h-6" />}
              {listing?.hasAirConditioner && (
                <div className="flex items-center gap-2">
                  <IconAirConditioning size={20} />
                  <div className="hidden md:block text-sm">
                    Air conditioning
                  </div>
                </div>
              )}
              {listing?.hasPool && (
                <div className="flex items-center gap-2">
                  <IconPool size={20} />
                  <div className="hidden md:block text-sm">Pool</div>
                </div>
              )}
              {listing?.hasKitchen && (
                <div className="flex items-center gap-2">
                  <IconToolsKitchen size={20} />
                  <div className="hidden md:block text-sm">Kitchen</div>
                </div>
              )}
            </div>
          </div>
          {isUpcoming && (
            <div className="flex items-center justify-start gap-2 w-full">
              <button
                className="text-red-500 hover:text-red-400 font-semibold"
                onClick={() => cancelStay(stay.id)}
                disabled={isCancelingStay}
              >
                {isCancelingStay ? "Canceling..." : "Cancel Stay"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
