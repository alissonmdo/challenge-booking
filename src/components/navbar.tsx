import { IconBook2, IconLoader } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { useStayCount } from "../hooks/queries/use-stay-count";

export function Navbar() {
  const location = useLocation();
  const { data: stayCount, isLoading: isLoadingStayCount } = useStayCount({
    status: "upcoming",
  });
  return (
    <div className="navbar bg-accent max-w-[100vw] text-accent-content">
      <div className="navbar-start">
        <div className="flex sm:hidden hover:scale-110 transition-all">
          <IconBook2 size={24} />
          <Link to="/" className="text-xl">
            Booking
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden sm:inline-flex hover:scale-110 transition-all">
        <IconBook2 size={24} />
        <Link to="/" className="text-xl">
          Booking Challenge
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <Link
          to={location.pathname === "/stays" ? "/" : "/stays"}
          className="btn btn-sm"
        >
          {location.pathname === "/stays" ? (
            "Back to Home"
          ) : (
            <>
              <div className="badge badge-primary">
                {isLoadingStayCount ? (
                  <IconLoader size={16} className="animate-spin" />
                ) : (
                  stayCount
                )}
              </div>
              My Stays
            </>
          )}
        </Link>
      </div>
    </div>
  );
}
