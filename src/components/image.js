// Image.js
import React from "react";

function Image(props) {
  return <img src={props.imageUrl} alt={props.name} />;
}

export default Image;
