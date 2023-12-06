import React from "react";
import "./Menu.css";
import profilePic from "../../../src/assets/images/profile-pic.png";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profilePic} alt="profile-pic"></img>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Icons</div>
        </>
      )}
    </>
  );
};

export default Menu;
