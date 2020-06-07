import React from 'react';
import './text.css'

export default function Checklist(props) {
  return (
    <>
      <span className="bold italic">Goals</span><br/>
      {props.flavors ? <>Flavors: <span className="italic">{props.flavors}</span></> : <>Flavors</>}<br/>
      {props.textures ? <>Textures: <span className="italic">{props.textures}</span></> : <>Textures</>}<br/>
      <span className="bold italic">Implementation</span><br/>
      {props.keyIngredient ? <>Key Ingredients: <span className="italic">{props.keyIngredient}</span></> : <>Key Ingredients</>}<br/>
      {props.supportingIngredients ? <>Supporting Ingredients: <span className="italic">{props.supportingIngredients}</span></> : <>Supporting Ingredients</>}<br/>
      {props.sauce ? <>Sauce: <span className="italic">{props.sauce}</span></> : <>Sauce</>}<br/>
      {props.methods ? <>Cooking Methods: <span className="italic">{props.methods}</span></> : <>Cooking Methods</>}<br/>
    </>
  );

};
