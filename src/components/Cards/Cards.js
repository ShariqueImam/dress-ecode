import React from "react";
import SingleCard from "./SingleCard";
import img1 from "../../assets/card1.jpeg";
import img2 from "../../assets/card2.jpeg";
import img3 from "../../assets/card3.jpeg";
const style = {
  wrapper: "flex flex-col w-[95%] md:w-[80%] lg:w-[70%] mx-auto items-start",
};
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <section className="flex items-start justify-center flex-col">
        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-4xl mt-12 md:mt-24 text-center md:text-left">
         
EPISODI TOP
        </h2>
        <p className="border-b-[3px] w-[100px] border-lime-600 p-2"></p>
      </section>
      <section className="flex items-center justify-between my-8 md:mb-36 flex-wrap ">
        <SingleCard
        
        
        
          image={img1}
          heading={"CRESCITA"}
          line={
            "Libera il tuo potenziale. Conversazioni stimolanti. Mentalità in trasformazione. Abbraccia la crescita"
          }
          link="https://open.spotify.com/episode/6nvCiznomQ3jk8qa0vU3Ui"
        />
        <SingleCard
          image={img2}
          heading={"SOSTENIBILITÀ"}
          line={
            "Esplorare la vita eco-consapevole. Ispirare scelte sostenibili. Soluzioni per un futuro più verde"
          }
          link="https://open.spotify.com/episode/0fXyCOLfbEPG2XuUmUAeLl?si=b8f699af75624e4a"
        />
        <SingleCard
          image={img3}
          heading={"BENESSERE"}
          line={
            "Coltiva la tua mente e il tuo corpo. Consulenza di esperti per il benessere olistico. Coltiva la felicità"
          }
          link="https://open.spotify.com/episode/4BeOTgBiqtcXMaPvyv8VHf?si=abf184e10d0f4e79"
        />{" "}
      </section>
    </div>
  );
};

export default Cards;
