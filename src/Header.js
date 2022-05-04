
import React from "react";
import "./Header.css";
// import HomeIcon from "@material-ui/icons/Home";
import HomeIcon from "@mui/icons-material/Home"
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header() {
  return (
    //BEM naming class
    <div className="header">
      <div className="header__icons">
        {/* All icons will be here.. */}
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>HOME</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />

          <p>TRENDING</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>VERIFIED</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>COLLECTIONS</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>SEARCH</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>ACCOUNT</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=" "
      />
    </div>
  );
}

export default Header;
