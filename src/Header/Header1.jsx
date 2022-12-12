import React from "react";

// props:text, color, bgcolor, font
function Header1(props) {
  const style = {
    height: "80px",
    width: "100vw",
    fontFamily: `${props.font}`,
    fontSize: "40px",
    fontWeight: "Bolder",
    backgroundColor: props.bgcolor,
    color: props.color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `-1000px 0px 0px 0px ${props.bgcolor}, 1000px 0px 0px 0px ${props.bgcolor}`,
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: "2",
  };

  return <div style={style}>{props.text}</div>;
}

export default Header1;
