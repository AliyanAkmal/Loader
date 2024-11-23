import React, { useState } from "react";
// import Button from "../button/button";
import { sculptureList } from "../card/data.js";
import "./card.css";

function Card() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const hasBack = index > 0;

  function HandleOnClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function HandleOnClickBack() {
    if (hasBack) {
      setIndex(index - 1);
    }
  }

  function handleShowMore() {
    setShow(!show);
  }
  //////////////////////
  return (
    <div className="padding">
      <button onClick={HandleOnClickBack} disabled={!hasBack}>
        Back
      </button>
      <button onClick={HandleOnClick}>next</button>
      <h1>
        {sculptureList[index].name}
        <span>{sculptureList[index].artist}</span>
      </h1>

      <div>
        <p>
          ({index}/{sculptureList.length})
        </p>
        <button onClick={handleShowMore}>
          {show ? "Hide" : "Show"} details
        </button>
        <div>{show && <p>{sculptureList[index].description}</p>}</div>
        <p className="display">{show}</p>
      </div>
      <img src={sculptureList[index].url} alt="" />
    </div>
  );
}
export default Card;
