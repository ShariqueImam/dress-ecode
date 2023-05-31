import React from "react";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo2.png";
import img3 from "../../assets/logo3.png";
import img4 from "../../assets/img12.png";
import img5 from "../../assets/4.jpeg";
const style = {
  wrapper: "w-[100vw]  flex flex-col  font bg-white",
  heading:
    "text-3xl md:text-4xl lg:text-5xl text-gray-800  my-2 md:my-5 w-[100%] md:w-[80%] text-center  font-semibold",
  para: "tracking-wider text-white text-sm md:text-md my-1 text-center mx-auto md:mx-0 w-[100%] md:w-[50%] text-gray-700",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer mx-auto md:mx-0 my-5 flex flex-col md:flex-row items-center  justify-center w-[80%] md:w-[80%] lg:w-[50%] px-4 rounded",
  mainContent:
    "w-[100%] md:w-[100%] h-[100%] md:h-[80%] flex flex-col items-center justify-center  mx-auto mt-7 md:mt-2 bg-[#EAD9EB] py-6 md:py-12",
  buttonText:
    "flex items-center justify-center md:justify-between  rounded-md mx-5 my-3 w-[70%] md:w-auto ",
};

const Home = (props) => {
  const { width } = useWindowSize();
  // const FeaturedBackground1 = styled.div`
  //   background: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //     url(${img3});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  //   background-attachment: auto;
  //   height: 70vh;
  //   width: 100vw;
  // `;
  const onScroll = (val) => {
    props.onScroll(val);
  };
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={onScroll} />
      {/* adding the images */}
      <section className="flex flex-col md:flex-row items-center justify-center ">
        <img src={img4} alt="" className="h-[50vh] md:h-[70vh]" />
        {/* <img src={img5} alt="" /> */}
      </section>
      <section>
        <div className={style.mainContent}>
          <h2 className={style.heading}>
            Il podcast di{" "}
            <a href="https://dress-ecode.com/" className="underline">
              Dress ECOde
            </a>
          </h2>
          <p className={style.para}>
          Smascheriamo i palloncini gonfiati tinti di verde e al posto di green
          temporanei proponiamo brand e soluzioni per una moda più etica e
          leggera per l’ambiente
          </p>
          <p className="text-4xl md:text-5xl mt-5 md:mt-12 text-center">Ascoltaci sulla tua app preferita</p>
          <div className={style.btnContainer}>
            <a
              href="https://open.spotify.com/show/1JuJ77FckpZegopgkxIcFZ?si=f4d31040ffce4f17&nd=1"
              className={style.buttonText}
            >
              <img src={img3} alt="" className="w-36" />
            </a>
            <a
              href="https://podcasts.apple.com/it/podcast/audio-%C3%A0-porter/id1492683642"
              className={style.buttonText}
            >
              {" "}
              <img src={img1} alt="" className="w-36" />
            </a>
            <a
              href="https://www.spreaker.com/show/audio-a-porter"
              className={style.buttonText}
            >
              {" "}
              <img src={img2} alt="" className="w-36" />
            </a>
          </div>
        <p className="w-[85%] md:w-[50%] text-center text-lg md:text-lg">
         
        </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
