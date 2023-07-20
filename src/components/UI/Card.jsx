import "./Card.css";
const Card = (Props) => {
  return <div className={`card || ${Props.className}`}>{Props.children}</div>;
};

export default Card;
