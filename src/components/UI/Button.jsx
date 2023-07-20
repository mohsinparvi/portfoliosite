import "./Button.css";
const Button = (Props) => {
  return (
    <div>
      <button
        className={`btn || ${Props.className}`}
        onClick={Props.onClick}
        type={Props.type}
      >
        {Props.children}
      </button>
    </div>
  );
};

export default Button;
