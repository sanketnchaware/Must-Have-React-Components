import React from "react";
import profile from "../assets/icons/profile.svg";
import notification from "../assets/icons/notification.svg";
import { Link } from "react-router-dom";
const Navbar = ({
  navlinks = [
    {
      name: "Link1",
      url: "#",
    },
    {
      name: "Link2",
      url: "#",
    },
    {
      name: "Link3",
      url: "#",
    },
  ],
}) => {
  return (
    <nav className="px-4 py-3 fixed top-0 w-full   bg-floralWhite text-nero font-bold flex items-start justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={profile} alt="profile" />
        <p className="">Welcome</p>
      </div>

      <div className="flex items-center gap-8">
        <div className="space-x-8">
          {React.Children.toArray(
            navlinks?.map(({ name, url }) => {
              return (
                <Link to={url} className="">
                  {name}
                </Link>
              );
            })
          )}
        </div>
        <div className="gap-6 flex items-center">
          <img src={profile} alt="profile" />

          <img src={notification} alt="notification" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
