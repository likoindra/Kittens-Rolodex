import React from "react";
import "./card.styles.css";
function CardComponent(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monsters.id}?set=set4&size=300x300`}
        alt="monsters"
      />
      <h2> {props.monsters.name}</h2>
      <p> {props.monsters.email}</p>
    </div>
  );
}

export default CardComponent;
