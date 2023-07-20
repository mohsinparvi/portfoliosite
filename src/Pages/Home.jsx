import "./Home.css";
import { BiLogoTwitter, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
// import heroImage from "../assets/logo4.png";
// import heroImage1 from "../assets/hero01.jpg";
// import heroImage1 from "../assets/hero04.png";
import heroImage1 from "../assets/hero08.svg";

const Home = () => {
  return (
    <div className="hero__section" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero_text_content">
            <p className="hero_para">Hi, my name is</p>
            <h1 className="hero__name">Mohsin Hassan.</h1>
            <h2 className="hero__work">
              <span className="role">
                <Typewriter
                  words={[
                    "I am a frontend Developer.",
                    "I build things for the web.",
                    "I am a JavaScript Developer.",
                  ]}
                  loop={20}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="hero__info">
              I thrive on building from the ground up, turning ideas into
              functional web apps. My focus: creating accessible, user-centric
              products for clients.
            </p>
            <div className=" social_icons">
              <div className="linkedIn">
                <a href="https://www.linkedin.com/in/aboutmohsin/">
                  <BiLogoLinkedin size={25} />
                </a>
              </div>
              <div className="github">
                <a href="https://github.com/aboutmohsin">
                  <BiLogoGithub size={25} />
                </a>
              </div>
              <div className="twitter">
                <a href="https://twitter.com/aboutmohsin">
                  <BiLogoTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero_img_content">
            <img src={heroImage1} alt="hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
