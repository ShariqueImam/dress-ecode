import React, { useState } from "react";

import NavDrawer from "./NavDrawer";
import "animate.css";
// import logo from '../../assets/kris_logo.png'
const Navbar = (props) => {
  const style = {
    // navDrawer: "flex sm:hidden items-center justify-center font1 ",
    wrapper:
      "flex-col pt-1 md:py-4 w-[100%] md:w-[90%] mx-auto text-2xl md:text-6xl font2 flex items-center justify-center text-[#A6DFB8] tracking-wider",
  };
  const [Enter, setEnter] = useState(false);
  const [Item, setItem] = useState("home");
  props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };
  return (
    // install the mui first
    <div className={style.wrapper}>
      <h2> Pop-up Green</h2>
      <p className="font text-xl tracking-normal">Il podcast alla ricerca della sostenibilità</p>
    </div>
  );
};

export default Navbar;
