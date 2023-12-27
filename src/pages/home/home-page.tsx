import { Navbar } from "../../components/navbar";
import { ListingCard } from "../../components/listing-card";
import { SearchBox } from "../../components/search-box";
import { useHomePage } from "./use-home-page";
import { IconCalendarStats } from "@tabler/icons-react";

export function HomePage() {
  const {
    isLoadingUnavailableDates,
    unavailableDates,
    isLoadingListings,
    listings,
    searchTerm,
    setSearchTerm,
    dateRange,
    setDateRange,
  } = useHomePage();

  return (
    <div className="min-h-screen min-w-full bg-base-200 flex flex-col items-center">
      <div className="flex bg-accent flex-col w-full h-44 md:max-h-44 items-center p-4 mb-10 md:mb-0 ">
        <Navbar />
        {isLoadingUnavailableDates ? (
          <div className="skeleton w-[640px] max-w[100vw] h-20" />
        ) : (
          <SearchBox
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            unavailableDates={unavailableDates}
          />
        )}
      </div>
      <div className="flex flex-col gap-4 w-full flex-1 items-center p-4">
        {!dateRange ? (
          <div className="w-full flex flex-1 items-center justify-center text-lg font-medium gap-4">
            <IconCalendarStats size={32} />
            Please select a date range to search for listings
          </div>
        ) : isLoadingListings ? (
          new Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="skeleton w-[640px] max-w[100vw] h-32" />
            ))
        ) : (
          listings?.map((item) => (
            <ListingCard
              listing={item}
              key={item.id}
              selectedDates={dateRange}
            />
          ))
        )}
      </div>
    </div>
  );
}
