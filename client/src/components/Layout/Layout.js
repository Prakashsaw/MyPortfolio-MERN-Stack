import React from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change togggle

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
