import React from "react";
import { AiFillMail } from "react-icons/ai";
const style = {
  wrapper:
    "md:my-8 lg:my-12 flex flex-col md:flex-row items-center justify-center mx-auto w-[75%] md:w-[70%] mx-auto ",
  address: "md:w-[35%] my-6 flex flex-col",
  center: "md:w-[25%] flex flex-col items-center justify-center my-6",
  contact: "md:w-[35%] my-6",
  ourAddress: "text-[#A6DFB8] text-sm md:text-md text-center mx-auto underline",
  contactContent:
    "text-[#A6DFB8] text-sm md:text-md text-center flex items-center justify-center",
  info: "text-[#A6DFB8] text-sm md:text-md text-center mt-5",
  heading: "text-white text-md md:text-lg text-center my-6 font-semibold",
};

const MainFooter = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.address}>
        <h2 className={style.heading}>Il nostro sito web</h2>
        <a className={style.ourAddress} href="https://dress-ecode.com/">
          Visita ora
        </a>
      </div>
      <div className={style.center}>
        {/* logo */}
        <h2 className="text-3xl md:text-3xl text-white">Dress Ecode</h2>
        <h2 className={style.info}>
          Diffondiamo una moda più sostenibile dal punto di vista sociale,
          ambientale ed economico, per determinare un cambiamento nel settore
          attraverso: <br /> -Informazione affidabile e indipendente su come vestire in
          modo più green ed etico   <br /> - Consulenza e formazione per abbracciare una
          moda che rispetti persone e ambiente
        </h2>
      </div>
      <div className={style.contact}>
        <h2 className={style.heading}>Contattaci</h2>
        <section className={style.contactContent}>
          <AiFillMail className="text-[#A6DFB8] text-xl mx-3" />
          <h2> Email:dress_ecode@icloud.com</h2>
        </section>
      </div>
    </div>
  );
};

export default MainFooter;
