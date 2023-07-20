import "./BorderCard.css";
const BorderCard = (Props) => {
  return (
    <div className={`border_card || ${Props.className}`}>{Props.children}</div>
  );
};

export default BorderCard;
