import Card from "../components/UI/Card";
import "./Experience.css";
import Fade from "react-reveal/Fade";

const Experience = (Props) => {
  return (
    <div className="experiences_section" id="experience">
      <div className="container">
        <div className="experience__content">
          <div className="education_exprience">
            <h2 className="experience__title">Education</h2>
            <Fade bottom distance="30%">
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="school__name">
                  Shaheed Zulfikar Ali Bhutto Institute of Science and
                  Technology (SZABIST)
                </h2>
                <p className="degree">
                  Bachelors of Science in Computer Science (2019 - 2023)
                </p>
              </Card>
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="school__name">
                  MIDCITY EDUCATOR SCHOOL AND COLLEGE, SKARDU
                </h2>
                <p className="degree">ICS (2016 - 2018)</p>
              </Card>
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="school__name">
                  JINNAH PUBLIC SCHOOL AND COLLEGE, SKARDU
                </h2>
                <p className="degree">ICS (2014 - 2016)</p>
              </Card>
            </Fade>
          </div>
          <div className="work__experience">
            <h2 className="experience__title">Work Experience</h2>
            <Fade bottom distance="30%">
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="company">IK Solutions</h2>
                <span className="work_duration">Oct 2022 - Feb 2023</span>
                <p className="work">
                  <span className="dot">-</span> Developed, maintained, and
                  shipped production code for client websites.
                </p>
                <p className="work">
                  <span className="dot">-</span> Tools & technologies: React js,
                  HTML, CSS, JavaScript, PHP.
                </p>
              </Card>
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="company">Upwork</h2>
                <span className="work_duration">Oct 2022 - Present</span>
                <p className="work">
                  <span className="dot">-</span> Creating website layouts and
                  user interfaces.
                </p>
                <p className="work">
                  <span className="dot">-</span> Tools & technologies: React js,
                  HTML, CSS, JavaScript, PHP.
                </p>
              </Card>
              <Card className={`experience__card ${Props.cardColor}`}>
                <h2 className="company">Fiverr</h2>
                <span className="work_duration">July 2020 - Present</span>
                <p className="work">
                  <span className="dot">-</span> Building responsive web layouts
                  that work across different screen sizes and devices.
                </p>
                <p className="work">
                  <span className="dot">-</span> Tools & technologies: React js,
                  HTML, CSS, JavaScript, PHP.
                </p>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Experience;
