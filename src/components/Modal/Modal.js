import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Switch from "react-switch";
import useWindowSize from "../../hooks/useWindowSize";

Modal.setAppElement("#root");

export default function App() {
  const { width } = useWindowSize();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      width: width < 500 ? "95%" : "50%",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [isSettingOpen, setisSettingOpen] = useState(false);
  const [PrivacyText, setPrivacyText] = useState(false);
  const [Checked, setChecked] = useState(true);
  const [Necessary, setNecessary] = useState(false);
  const [NonNecessary, setNonNecessary] = useState(false);
  function afterOpenModal() {}

  function closeModal() {
    localStorage.setItem("cookiesCheckedOrNot", true);
    setIsOpen(false);
  }
  const style = {
    wrapper: "font px-1 md:px-10 py-3 md:py-2 flex flex-col items-start",
    btnContainer: "flex items-start my-4 justify-center",
    btn1: "bg-lime-600 text-white text-sm px-4 md:px-5 py-2 md:py-2 mr-3 font-thin cursor-pointer hover:opacity-[0.9] transtion duration-[300ms]",
    btn2: "bg-lime-600 text-black text-sm px-4 md:px-5 py-2 md:py-2 mr-3 font-thin cursor-pointer hover:opacity-[0.9] transtion duration-[300ms]",
  };
  const handleCookieSettingContent = () => {
    setisSettingOpen(true);
  };
  const handlePrivacyText = () => {
    setPrivacyText((prev) => !prev);
  };
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const acceptCookies = () => {
    setIsOpen(false);
  };
  const goBack = () => {
    setisSettingOpen(false);
  };
  const handleNonNecessary = () => {
    setNonNecessary((prev) => !prev);
  };
  const handleNecessary = () => {
    setNecessary((prev) => !prev);
  };
  let a = localStorage.getItem("cookiesCheckedOrNot");
  return (
    <div>
      {!a && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
          overlayClassName="bg-red-300"
        >
          <div className={style.wrapper}>
            {!isSettingOpen && (
              <div className="flex flex-col items-start">
                <section className="my-2 md:my-3 text-gray-700">
                  Utilizziamo i cookie per migliorare la vostra esperienza di
                  navigazione. Per continuare a navigare nel sito accetta la
                  nostra politica cookie.
                </section>
                <a
                  className="text-lime-600 underline"
                  href="https://dress-ecode.com/cookie-policy"
                >
                  Leggi l'informativa
                </a>
                <section className={style.btnContainer}>
                  <p className={style.btn1} onClick={closeModal}>
                    Accetta
                  </p>
                  <p className={style.btn1} onClick={closeModal}>
                    Rifiuta
                  </p>
                  <p
                    className={style.btn2}
                    onClick={() => handleCookieSettingContent()}
                  >
                    Cookie Setting
                  </p>
                </section>{" "}
              </div>
            )}

            {/* adding the content for the cookie setting */}
            {isSettingOpen && (
              <section className="flex flex-col items-start">
                <h2 className="text-gray-700 font-extra">Privacy Overview</h2>
                {!PrivacyText && (
                  <p className="text-gray-500 text-xs">
                    Questo sito Web utilizza i cookie per migliorare la tua
                    esperienza durante la navigazione nel sito Web. Di questi
                    cookie, i cookie classificati come necessari vengono
                    memorizzati nel browser in quanto sono essenziali per il
                    funzionamento delle funzio...
                  </p>
                )}
                {PrivacyText && (
                  <p className="text-gray-500 text-xs">
                    Questo sito Web utilizza i cookie per migliorare la tua
                    esperienza durante la navigazione nel sito Web. Di questi
                    cookie, i cookie classificati come necessari vengono
                    memorizzati nel browser in quanto sono essenziali per il
                    funzionamento delle funzionalità di base del sito web.
                    Utilizziamo anche cookie di terze parti che ci aiutano ad
                    analizzare e comprendere come utilizzi questo sito web.
                    Questi cookie verranno memorizzati nel tuo browser solo con
                    il tuo consenso. Hai anche la possibilità di disattivare
                    questi cookie. Tuttavia, la disattivazione di alcuni di
                    questi cookie potrebbe avere un effetto sulla tua esperienza
                    di navigazione./ This website uses cookies to improve your
                    experience while you navigate through the website. Out of
                    these cookies, the cookies that are categorized as necessary
                    are stored on your browser as they are essential for the
                    working of basic functionalities of the website. We also use
                    third-party cookies that help us analyze and understand how
                    you use this website. These cookies will be stored in your
                    browser only with your consent. You also have the option to
                    opt-out of these cookies. But opting out of some of these
                    cookies may have an effect on your browsing experience.
                  </p>
                )}

                <button
                  onClick={() => handlePrivacyText()}
                  className="text-xs text-lime-700 underline"
                >
                  Mostra Meno
                </button>
                {/* adding the button for neccessary and non necessary */}
                <button
                  onClick={handleNecessary}
                  className="bg-gray-200 px-2 md:px-3 py-3 md:py-2 flex justify-between items-center w-[100%] rounded-md my-3"
                >
                  <p className="">Necessari/Necessary</p>
                  <p className="">Sempre abilitato</p>
                </button>
                {Necessary && (
                  <p className="text-gray-500 text-xs">
                    I cookie necessari sono assolutamente essenziali per il
                    corretto funzionamento del sito web. Questa categoria
                    include solo i cookie che garantiscono funzionalità di base
                    e caratteristiche di sicurezza del sito web. Questi cookie
                    non memorizzano alcuna informazione personale. / Necessary
                    cookies are absolutely essential for the website to function
                    properly. This category only includes cookies that ensures
                    basic functionalities and security features of the website.
                    These cookies do not store any personal information.
                  </p>
                )}

                <button
                  onClick={handleNonNecessary}
                  className="bg-gray-200 px-2 md:px-3 py-3 md:py-2 flex justify-between items-center w-[100%] rounded-md my-3"
                >
                  <p className="">Non Necessari/Non-Necessary</p>
                  <Switch
                    onChange={handleChange}
                    checked={Checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </button>
                {NonNecessary && (
                  <p className="text-gray-500 text-xs">
                    Qualsiasi cookie che potrebbe non essere particolarmente
                    necessario per il funzionamento del sito Web e viene
                    utilizzato specificamente per raccogliere dati personali
                    dell\'utente tramite analisi, pubblicità, altri contenuti
                    incorporati sono definiti come cookie non necessari. È
                    obbligatorio ottenere il consenso dell\'utente prima di
                    eseguire questi cookie sul tuo sito web./ Any cookies that
                    may not be particularly necessary for the website to
                    function and is used specifically to collect user personal
                    data via analytics, ads, other embedded contents are termed
                    as non-necessary cookies. It is mandatory to procure user
                    consent prior to running these cookies on your website.
                  </p>
                )}

                <section className="self-end">
                  <button
                    onClick={goBack}
                    className="bg-lime-600 px-4 md:px-5 py-2 md:py-2 text-white text-sm my-3  rounded mx-2"
                  >
                    Indietro
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="bg-lime-600 px-4 md:px-5 py-2 md:py-2 text-white text-sm my-3  rounded mx-2"
                  >
                    ACCETTA E SALVA
                  </button>
                </section>
              </section>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

// ReactDOM.render(<App />, appElement);
