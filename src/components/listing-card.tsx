import {
  IconAirConditioning,
  IconBed,
  IconPool,
  IconStarFilled,
  IconToolsKitchen,
} from "@tabler/icons-react";
import { ListingDTO } from "../api";
import { useBookStay } from "../hooks/mutations/use-book-stay";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export type ListingCardProps = {
  listing: ListingDTO;
  selectedDates: [string, string];
  onBooking?: (isBooking: boolean) => void;
};

export function ListingCard(props: ListingCardProps) {
  const { listing, selectedDates } = props;
  const {
    mutate: bookStay,
    isPending: isBookingStay,
    isSuccess,
  } = useBookStay();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess) return;
    navigate("/stays");
  }, [isSuccess, navigate]);
  return (
    <div
      className="flex bg-base-100 rounded-box p-4 max-w-[100vw] w-[640px]"
      key={listing.title}
    >
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex md:items-center gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <div className="tooltip" data-tip={listing.title}>
                <div className="tooltip text-xl font-bold w-full line-clamp-2 text-left">
                  {listing.title}
                </div>
              </div>
            </div>
            <div className="text-sm">
              {listing.city}, {listing.state}
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <IconStarFilled size={20} className="text-yellow-400" />
            <div className="text-sm">{listing.rating.toFixed(1)}</div>
            <div className="flex items-center gap-2">
              <IconBed size={24} />
              <div className="text-sm">{listing.bedAmount} beds</div>
            </div>
            <div className="flex-1 flex justify-end gap-4">
              {listing.hasAirConditioner && (
                <div className="flex items-center gap-2">
                  <IconAirConditioning size={20} />
                  <div className="hidden md:block text-sm">
                    Air conditioning
                  </div>
                </div>
              )}
              {listing.hasPool && (
                <div className="flex items-center gap-2">
                  <IconPool size={20} />
                  <div className="hidden md:block text-sm">Pool</div>
                </div>
              )}
              {listing.hasKitchen && (
                <div className="flex items-center gap-2">
                  <IconToolsKitchen size={20} />
                  <div className="hidden md:block text-sm">Kitchen</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-horizontal hidden md:flex" />
      <div className="items-center hidden md:flex">
        <button
          className="btn btn-primary"
          onClick={() => {
            bookStay({
              listingId: listing.id,
              checkInDate: selectedDates[0],
              checkOutDate: selectedDates[1],
            });
          }}
          disabled={isBookingStay}
        >
          {isBookingStay ? "Booking..." : "Book now"}
        </button>
      </div>
    </div>
  );
}
