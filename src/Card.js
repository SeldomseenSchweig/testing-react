import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.caption}</h4>
      <img className="Card-image" src={props.src} alt={props.caption} />
      <small className="Card-small">
        Image {props.currNum} of {props.totalNum}.
      </small>
    </div>
  );
}
Card.defaultProps = {
  caption: "hello",
  source: null,
  totalNum:5
};



export default Card;
