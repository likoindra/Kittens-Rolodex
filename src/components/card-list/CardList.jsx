import React from "react";
import CardComponent from "../card/CardComponent";
import "./card-list.styles.css";

function CardList(props) {
  // console.log(props)
  return (
    <div className="card-list">
      {props.monsters.map((monsters) => (
        <CardComponent key={monsters.id} monsters={monsters}> </CardComponent>
      ))}
    </div>
  );
}

export default CardList;
