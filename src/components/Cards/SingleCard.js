import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
const style = {
  wrapper: "mx-5 md:mx-1 my-4 p-6 md:p-8 w-[90%] md:w-[30%] lg:w-[30%] font",
  heading:
    "font-semibold text-2xl md:text-2xl pb-24 text-white w-[100%] md:w-[60%]",
  para: " text-sm md:text-lg mt-2 text-white pt-12",
  line: "underline cursor-pointer",
  button:
    "bg-[#A6DFB8] flex items-center justify-center text-white px-5 md:px-8 py-2 md:py-3 rounded-full mt-7 hover:opacity-[0.85] transition duration-[300ms]",
  btnText: "bg-[#A6DFB8] flex items-center justify-center text-black",
};
const SingleCard = ({ line, heading, image, link }) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.a`
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(width < 500 && `${image}`) ||
      (width > 500 && width < 1000 && `${image}`) ||
      (width > 1000 && `${image}`)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    border-radius: 20px;
  `;
  return (
    <FeaturedBackground1 className={style.wrapper} href={link}>
      <h2 className={style.heading}>{heading}</h2>
      <p className={style.para}>{line}</p>
      <button className={style.button}>
        <p className={style.btnText}>Ascolta adesso
</p>
        <AiOutlineArrowRight className="font-semibold ml-5 text-black" />
      </button>
    </FeaturedBackground1>
  );
};

export default SingleCard;
