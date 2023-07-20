import "./Portfolio.css";
import Button from "../components/UI/Button";
import { useState } from "react";
import Card from "../components/UI/Card";
import { htmlSkill } from "../services/skillList";
import Fade from "react-reveal/Fade";
const Portfolio = (Props) => {
  // const [openModal, setOpenModal] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredSkills =
    selectedCategory === "all"
      ? htmlSkill
      : htmlSkill.filter((skill) => skill.skill.includes(selectedCategory));

  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // };

  // const handelActive = () => {
  //   setIsActive(!isActive);
  //   console.log("active change");
  // };
  const skillList = [
    {
      id: Math.random().toString(10),
      skill: ["ALL CATEGORIES"],
      category: "all",
    },
    {
      id: Math.random().toString(10),
      skill: ["HTML | CSS"],
      category: "html",
    },
    {
      id: Math.random().toString(10),
      skill: [" HTML | CSS | JavaScript"],
      category: "JavaScript",
    },
    {
      id: Math.random().toString(10),
      skill: ["React js"],
      category: "react js",
    },
    {
      id: Math.random().toString(10),
      skill: ["Next js"],
      category: "next",
    },
  ];

  // const activeClass = isActive ? "active" : null;
  return (
    <div className="portfolio_section animation " id="portfolio">
      <div className="container">
        <div className="portfolio__title">
          <h2>Portfolio</h2>
          <p>Most recent work</p>
        </div>
        <div className="project__name_tech">
          {skillList.map((items) => (
            <button
              className={`project_tech active ${Props.buttonColor} ${Props.aTage}`}
              // onClick={handelActive}
              onClick={() => handleCategoryClick(items.category)}
              key={items.id}
            >
              {items.skill}
            </button>
          ))}
        </div>

        <div className="portfolio_content portfolio_grid animate__slideInUp animate__animated">
          <Fade bottom distance="30%">
            {filteredSkills.map((skill) => (
              <Card
                className={`portfolio__card animation ${Props.cardColor}`}
                key={skill.id}
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="project_image"
                />
                <div className="project_details">
                  <h2 className="portfolio_title">{skill.title}</h2>
                  <p className="project_para">{skill.technologies}</p>
                </div>
                <div className="project_btn">
                  <Button className="btn_width visit">
                    <a
                      href={skill.visit}
                      target="_blank"
                      rel="noreferrer"
                      className={`project_link ${Props.btnColor}`}
                    >
                      Visit
                    </a>
                  </Button>
                  <Button className="btn_width btn_github">
                    <a
                      href={skill.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`project_link ${Props.btnColor}`}
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </Fade>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Portfolio;
