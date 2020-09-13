import React from "react";
import "./Sidebar.scss";
import SidebarRow from "./../SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Główna" active />
      <SidebarRow Icon={WhatshotIcon} title="Na czasie" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subskrypcje" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Biboteka" />
      <SidebarRow Icon={HistoryIcon} title="Historia" />
      <SidebarRow Icon={WatchLaterIcon} title="Do obejrzenia" />=
    </div>
  );
};

export default Sidebar;
