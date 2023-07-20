import "./About.css";
import aboutImage from "../assets/ab-img.png";
import Button from "../components/UI/Button";
import BorderCard from "../components/UI/BorderCard";
import { RxDownload } from "react-icons/rx";
import CV from "../assets/MohsinHassan_Resume.pdf";
const About = (Props) => {
  return (
    <div className="about_section" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about_img_content">
            <img src={aboutImage} alt="About image" />
          </div>
          <div className="about_text_content">
            <h1 className="about__heading">About Me</h1>
            <p className="aboout__para">
              Hello, I’m a Mohsin Hassan, web-developer based on Islamabad. I
              have rich experience in web site design & building and
              customization. Also I am good at
            </p>
            <div className="progrming_languages">
              <BorderCard className="hover_borderCard">React js</BorderCard>
              <BorderCard className="hover_borderCard">Node Js</BorderCard>
              <BorderCard className="hover_borderCard">Express Js</BorderCard>
              <BorderCard className="hover_borderCard">JavaScript</BorderCard>
              <BorderCard className="hover_borderCard">HTML</BorderCard>
              <BorderCard className="hover_borderCard">CSS</BorderCard>
            </div>
            <div className="btn-cv">
              <Button className={`btn_button ${Props.btnColor}`}>
                <a href={CV} className={`${Props.aTage}`}>
                  Download CV <RxDownload size={20} />
                </a>
              </Button>
              {/* <button></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
