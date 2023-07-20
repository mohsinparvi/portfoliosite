import { useState } from "react";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import NavBar from "./components/NavBar/NavBar";

import Fade from "react-reveal/Fade";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleModeToggle = () => {
    setIsDark(!isDark);
  };

  const modeToggle = isDark ? "light-theme" : "dark-theme";
  const footerBackground = isDark
    ? "footer__Background_dark "
    : "footer__Background_light";
  const cardBackground = isDark ? "card-light-theme " : "card-dark-theme";
  const contactForm = isDark ? "contact-light-theme" : "contact-dark-theme";
  const buttonColor = isDark ? "button-light-theme" : "button-dark-theme";
  const aTage = isDark ? "a-light" : "a-dark";
  return (
    <div className={`${modeToggle}`}>
      <NavBar onClick={handleModeToggle} isDark={isDark} color={modeToggle} aTage={aTage} />
      <Fade bottom distance="20%">
        <Home />
        <About btnColor={buttonColor} aTage={aTage} />
        <Services cardColor={cardBackground} />
        <Portfolio
          btnColor={buttonColor}
          cardColor={cardBackground}
          aTage={aTage}
        />
        <Experience cardColor={cardBackground} />
        <Contact formColor={contactForm} btnColor={buttonColor} />
      </Fade>
      <Footer color={footerBackground} />
    </div>
  );
}

export default App;
