import BorderCard from "../components/UI/BorderCard";
import Card from "../components/UI/Card";
import "./Services.css";
import { FaCode, FaLaptopCode, FaRegFileCode } from "react-icons/fa";
const Services = (Props) => {
  return (
    <div className="service_section" id="service">
      <div className="container">
        <div className="service_content">
          <div className="service_title">
            <h1>Services</h1>
            <p>What I offer</p>
          </div>
          <div className="service_cards">
            <Card className={Props.cardColor}>
              <div className="service_icon">
                <FaCode size={40} />
              </div>
              <div className="service__title">WEB DEVELOPMENT</div>
              <p className="service__para">
                I offer comprehensive web development services, delivering
                customized solutions to meet your business needs.
              </p>
              <h2 className="service__title">TOOLS & TECNOLOGIES</h2>
              <div className="service__technologies">
                <BorderCard className="hover_borderCard">React</BorderCard>
                <BorderCard className="hover_borderCard">HTML</BorderCard>
                <BorderCard className="hover_borderCard">CSS</BorderCard>
                {/* <BorderCard>Tailwind CSS</BorderCard> */}
              </div>
            </Card>
            <Card className={Props.cardColor}>
              <div className="service_icon">
                <FaLaptopCode size={40} />
              </div>
              <div className="service__title">UI/UX DEVELOPMENT</div>
              <p className="service__para">
                I offer UI/UX development services, combining creativity and
                usability to design engaging digital experiences for your users.
              </p>
              <h2 className="service__title">TOOLS & TECNOLOGIES</h2>
              <div className="service__technologies">
                <BorderCard className="hover_borderCard">Figma</BorderCard>
                <BorderCard className="hover_borderCard">Photoshop</BorderCard>
                {/* <BorderCard>Adobe Xp</BorderCard> */}
              </div>
            </Card>
            <Card className={Props.cardColor}>
              <div className="service_icon">
                <FaRegFileCode size={40} />
              </div>
              <div className="service__title">BACKEND DEVELOPMENT</div>
              <p className="service__para">
                I offer backend development services, building robust and
                scalable server-side solutions to power your web applications.
              </p>
              <h2 className="service__title">TOOLS & TECNOLOGIES</h2>
              <div className="service__technologies">
                <BorderCard className="hover_borderCard">Node</BorderCard>
                <BorderCard className="hover_borderCard">PHP</BorderCard>
                <BorderCard className="hover_borderCard">JavaScript</BorderCard>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
