import React from "react";
import SingleCounter from "./SingleCounter";

const style = {
  wrapper1: "h-[60%] my-6 flex-wrap w-[95%] md:w-[80%] lg:w-[70%] mx-auto ",
  wrapper: "h-[60%] flex justify-around my-6 flex-wrap",
  singleCounter: "flex flex-col items-center justify-center w-[45%] p-4",
  details: "text-lime-600 text-lg sm:text-lg md:text-md",
};
const Counter = () => {
  return (
    <div className={style.wrapper1}>
      <section className="flex items-center justify-center flex-col">
        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-4xl mt-12 md:mt-24 text-center md:text-left">
          ACHIEVEMENTS
        </h2>
        <p className="border-b-[3px] w-[100px] border-lime-600 p-2"></p>
      </section>
      <section className={style.wrapper}>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={100} duration={2} />
          <p className={style.details}>Podcasts</p>
        </div>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={800} duration={1} />
          <p className={style.details}>Listners</p>
        </div>

        <div className={style.singleCounter}>
          <SingleCounter start={0} end={9} duration={1} />
          <p className={style.details}>Rating</p>
        </div>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={10} duration={2} />
          <p className={style.details}>Guests</p>
        </div>
      </section>
    </div>
  );
};

export default Counter;
