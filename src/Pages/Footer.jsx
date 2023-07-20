import "./Footer.css";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { BiLogoUpwork } from "react-icons/bi";
const Footer = (Props) => {
  return (
    <div className={`footer_section ${Props.color}`} id="footer">
      {/* <div className="container"> */}
        <div className="footer__content">
          <div className="footer__logo">
            <h2>Mohsin</h2>
            <p>Web Developer</p>
          </div>
          <div className="footer__social">
            <h2>Social</h2>
            <div className="social__icon">
              <div className="socialicon">
                <a
                  href="https://www.linkedin.com/in/aboutmohsin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                >
                  <FaLinkedinIn size={30} /> <span>LinkedIn</span>
                </a>
              </div>
              <div className="socialicon">
                <a
                  href="https://g.dev/aboutmohsin"
                  className="social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle size={30} /> <span>Google Developer</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__social">
            <h2>Work</h2>
            <div className="social__icon">
              <div className="socialicon">
                <a
                  href="https://github.com/aboutmohsin"
                  className="social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} /> <span>GitHub</span>
                </a>
              </div>
              <div className="socialicon">
                <a
                  href=" https://www.upwork.com/freelancers/mohsinhassan2"
                  className="social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoUpwork size={30} />
                  <span>Upwork</span>
                </a>
              </div>
              <div className="socialicon">
                <a
                  href="https://www.fiverr.com/mohsin_ha7an?up_rollout=true"
                  className="social__link"
                >
                  <TbBrandFiverr size={30} />
                  <span>Fiverr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="copyright">
          Copyright © 2023 Mohsin Hassan. All Rights Reserved. Built & Designed
          by Mohsin Hassan.
        </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
