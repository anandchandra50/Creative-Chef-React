import React from 'react';
import './text.css';
import ReactTooltip from "react-tooltip";

export default function Checklist(props) {
  function renderItems(items) {
    return (
      <>
        {items.map((item) => (
          <>
            <span className={item in props.tooltips && "tooltip-text"} data-tip data-for={item}>{item}</span>
            {item in props.tooltips && <ReactTooltip id={item}>{props.tooltips[item]}</ReactTooltip>}
          </>
        ))}
      </>
    );
  }

  return (
    <>
      <span className="bold italic">Goals</span><br/>
      {props.flavors ? <>Flavors: <span className="italic">{props.flavors}</span></> : <>Flavors</>}<br/>
      {props.textures ? <>Textures: <span className="italic">{props.textures}</span></> : <>Textures</>}<br/>
      <span className="bold italic">Implementation</span><br/>
      {props.keyIngredient ? <>Key Ingredients: <span className="italic">{props.keyIngredient}</span></> : <>Key Ingredients</>}<br/>

      {props.supportingIngredients ? <>Supporting Ingredients: <span className="italic">{renderItems(props.supportingIngredients)}</span></> : <>Supporting Ingredients</>}<br/>
      {props.sauce ? <>Sauce: <span className="italic">{renderItems(props.sauce)}</span></> : <>Sauce</>}<br/>
      {props.methods ? <>Cooking Methods: <span className="italic">{renderItems(props.methods)}</span></> : <>Cooking Methods</>}<br/>
      {props.presentation ? <>Presentation: <span className="italic">{renderItems(props.presentation)}</span></> : <>Presentation</>}<br/>
    </>
  );

};
