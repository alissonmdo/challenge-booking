import { Navbar } from "../../components/navbar";
import { StayCard } from "../../components/stay-card";
import { useStaysPage } from "./use-stays-page";

export function StaysPage() {
  const { isErrorStays, isLoadingStays, pastStays, upcomingStays } =
    useStaysPage();
  return (
    <div className="min-h-screen min-w-full bg-base-200 flex flex-col gap-4 items-center">
      <div className="flex bg-accent flex-col w-full items-center p-4 h-44 max-h-44">
        <Navbar />
        <h2 className="text-accent-content text-4xl font-bold">My stays</h2>
      </div>
      <div className="flex flex-col w-full flex-1 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Upcoming stays</h3>
          {isLoadingStays ? (
            new Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="skeleton w-[640px] max-w[100vw] h-32" />
              ))
          ) : isErrorStays ? (
            <div>Something went wrong...</div>
          ) : upcomingStays?.length ? (
            upcomingStays.map((stay) => <StayCard stay={stay} key={stay.id} isUpcoming/>)
          ) : (
            <div className="w-full text-center pb-4">No upcoming stays</div>
          )}
          <h3 className="text-xl font-bold">Past stays</h3>
          {isLoadingStays ? (
            new Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="skeleton w-[640px] max-w[100vw] h-32" />
              ))
          ) : isErrorStays ? (
            <div>Something went wrong...</div>
          ) : pastStays?.length ? (
            pastStays.map((stay) => <StayCard stay={stay} key={stay.id} />)
          ) : (
            <div className="w-full text-center pb-4">No past stays</div>
          )}
        </div>
      </div>
    </div>
  );
}
