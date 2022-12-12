export default function Scoreboard(props) {
  const style = {
    right: "10vw",
    top: "0px",
    zIndex: "100",
    position: "absolute",
    textAlign: "right",
  };

  let infoStyle;
  if (props.status == "win") infoStyle = { color: "green" };
  else if (props.status == "lose") infoStyle = { color: "red" };

  let infoText;
  if (props.status == "win") infoText = "YOU WIN! Play again";
  else if (props.status == "lose") infoText = "GAME OVER! Try again";
  else infoText = "";

  return (
    <div style={style}>
      <p>
        score = {props.score} / {props.max}
      </p>
      <p style={infoStyle}>{infoText}</p>
    </div>
  );
}
