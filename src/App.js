import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Animator from "./components/UI/Animator";
import { scroller } from "react-scroll";
import Platforms from "./components/Platforms/Platforms";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
const style = {
  wrapper: "overflow-x-hidden w-[100vw] font",
};
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  useEffect(() => {
    document.title = "Dress ECode";
  }, []);
  return (
    <Animator>
      <div className={style.wrapper}>
        <Modal />
        {/* <div className="home"> */}
        <Home onScroll={onScroll} />
        {/* </div> */}
        <div className="top">
          <Cards onScroll={onScroll} />
        </div>
        <div className="platforms">
          {/* <Platforms onScroll={onScroll} /> */}
        </div>
        {/* <div className="achievements">
          <Counter onScroll={onScroll} />
        </div> */}
        <div className="contact">
          <Footer onScroll={onScroll} />
        </div>
      </div>
    </Animator>
  );
}
