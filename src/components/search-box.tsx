import { IconBed, IconCalendar, IconX } from "@tabler/icons-react";
import Datepicker, { DateType } from "react-tailwindcss-datepicker";
import dayjs from "dayjs";

export type SearchBoxProps = {
  searchTerm: string;
  onSearchChange: (search: string) => void;
  dateRange: [string, string] | null;
  onDateRangeChange: (dateRange: [string, string] | null) => void;
  unavailableDates?: string[][];
};
export function SearchBox(props: SearchBoxProps) {
  const {
    searchTerm,
    onSearchChange,
    dateRange,
    onDateRangeChange,
    unavailableDates,
  } = props;

  const handleDateSelection = (
    newValue: { startDate: DateType; endDate: DateType } | null
  ) => {
    console.log("newValue", newValue);
    if (newValue && newValue.startDate && newValue.endDate) {
      onDateRangeChange([
        newValue.startDate as string,
        newValue.endDate as string,
      ]);
    } else {
      onDateRangeChange(null);
    }
  };

  return (
    <div className="flex py-4 px-8 bg-base-100 rounded-box shadow-lg w-screen md:w-fit flex-wrap md:flex-nowrap gap-1 md:gap-0 z-10">
      <div className="flex items-center gap-2 relative">
        <IconBed size={24} />
        <input
          className="input w-full"
          placeholder="Search for a place to stay"
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        <button
          className={`btn btn-ghost absolute right-0 ${
            searchTerm ? "" : "hidden"
          }`}
          onClick={() => {
            onSearchChange("");
          }}
        >
          <IconX size={24} />
        </button>
      </div>
      <div className="divider divider-horizontal hidden md:flex" />
      <div className="flex items-center gap-2">
        <IconCalendar size={24} />
        <Datepicker
          value={
            dateRange
              ? {
                  // YYYY-MM-DD
                  startDate: dayjs(dateRange[0]).format("YYYY-MM-DD"),
                  endDate: dayjs(dateRange[1]).format("YYYY-MM-DD"),
                }
              : null
          }
          onChange={handleDateSelection}
          displayFormat="ddd DD, MMM"
          separator="-"
          inputClassName="input text-md min-w-[250px]"
          toggleIcon={() => null}
          toggleClassName="hidden pointer-events-none"
          placeholder="Check in - Check out"
          disabledDates={
            unavailableDates?.map((date) => ({
              startDate: date[0],
              endDate: date[1],
            })) ?? []
          }
        />
      </div>
    </div>
  );
}
