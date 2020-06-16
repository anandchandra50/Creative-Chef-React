import React from 'react';
import './text.css';
import ReactTooltip from "react-tooltip";
import { isMobile } from "react-device-detect";

export default function Checklist(props) {
  function renderTooltip(checklist, tooltips) {
    return (
      <ReactTooltip
        id={props.checklist}
        place={isMobile ? "bottom" : "right"}
        effect="solid"
      >
        <span className="bold">Why we used:</span><br/>
        {tooltips.map((item) => (
          <>
            {item}<br/>
          </>
        ))}
      </ReactTooltip>
    );
  }

  return (
    <>
      <div className="checklist" data-tip data-for={props.checklist}>
        <span className="bold">Goals</span><br/>
        {props.flavors ? <>Flavors: <span className="italic">{props.flavors}</span></> : <>Flavors</>}<br/>
        {props.textures ? <>Textures: <span className="italic">{props.textures}</span></> : <>Textures</>}<br/>
        <span className="bold">Implementation</span><br/>
        {props.keyIngredient ? <>Key Ingredients: <span className="italic">{props.keyIngredient}</span></> : <>Key Ingredients</>}<br/>
        {props.supportingIngredients ? <>Supporting Ingredients: <span className="italic">{props.supportingIngredients}</span></> : <>Supporting Ingredients</>}<br/>
        {props.sauce ? <>Sauce: <span className="italic">{props.sauce}</span></> : <>Sauce</>}<br/>
        {props.methods ? <>Cooking Methods: <span className="italic">{props.methods}</span></> : <>Cooking Methods</>}<br/>
        {props.presentation ? <>Presentation: <span className="italic">{props.presentation}</span></> : <>Presentation</>}<br/>
      </div>
      {props.tooltips && renderTooltip(props.checklist, props.tooltips)}
    </>
  );

};
