import React from "react";
import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo2.png";
import img3 from "../../assets/logo3.png";
const style = {
  wrapper: "bg-[#EAD9EB] font",
  heading: "text-4xl md:text-5xl text-black text-center p-6 md:px-12 md:py-12",
  btnContainer:
    "cursor-pointer mx-auto md:mx-0 my-5 flex flex-col md:flex-row items-center  justify-center px-4 rounded pb-12",
  buttonText:
    "flex items-center justify-center md:justify-between  rounded-md mx-5 my-3 w-[70%] md:w-auto ",
};
const Platforms = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Ascoltaci sulla tua app preferita</h2>
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
    </div>
  );
};

export default Platforms;
