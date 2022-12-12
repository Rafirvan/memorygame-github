import "./Card.scss";

export default function Card(props) {
  let style = {
    gridArea: `c${props.position}`,
  };

  return (
    <div
      className="card"
      style={style}
      onClick={function () {
        props.click(props.value);
      }}
    >
      {props.text}
    </div>
  );
}
