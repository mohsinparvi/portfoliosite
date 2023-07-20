// import BorderCard from "../UI/BorderCard";
// import image1 from "../../assets/portfolio/portfolio_1.jpg";
import BorderCard from "../UI/BorderCard";
// import Button from "../UI/Button";
import "./Modal.css";
const Modal = (Props) => {
  return (
    // <div className="modal__section">
    //   <div className="container">
    //     <div className="modal__card">
    //       <div className="overlay">
    //         <div className="modal__content">
    //           <div className="modal__content_text">
    //             <h2>Porfolio Site</h2>
    //             <p>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
    //               deserunt explicabo distinctio ex quis cumque? Dolores
    //               reprehenderit minus neque consequatur!
    //             </p>
    //             <div className="technologies">
    //               <BorderCard>React js</BorderCard>
    //               <BorderCard>Tailwind CSS</BorderCard>
    //             </div>
    //           </div>
    //           <div className="model__content__image">
    //             <img src={image1} alt="Porfolio site" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="modal-text">
          <h2 className="modal_title">Hello Modal</h2>
          <p className="modal_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          </p>
          <div className="modal_btn">
            <BorderCard className="modal_size">React js</BorderCard>
            <BorderCard className="modal_size">JavaScript</BorderCard>
            <BorderCard className="modal_size">Tailwind CSS</BorderCard>
          </div>
          <button className="close-modal" onClick={Props.onClick}>
            CLOSE
          </button>
        </div>
        <div className="modal-image">
          <img src={Props.image} alt="portfolio" className="modal_image" />
        </div>

      </div>
    </div>
  );
};

export default Modal;
