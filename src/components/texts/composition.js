import React from 'react';
import './text.css';
import Checklist from './checklist.js';

// <span className="italic">Regarding balance: it’s ok to duplicate flavors and textures across different ingredients, but be careful of situations in which everything tastes or feels the same. For example, pasta with a soft meat sauce works, but a puree on top of a risotto doesn’t.</span><br/><br/>
// <span className="italic">This chapter is a small step up from the previous two. The more experience you have cooking, the easier you will follow along. I believe the content is rewarding, but if it is too abstract, feel free to move on to the cheatsheets.</span><br/>
export default function Composition(props) {
  return (
    <>
      <div className="text__body">
        In this chapter, we will illustratrate our thought process in creating dishes.<br/><br/>
        <span className="bold">The Independent Chef's Checklist:</span><br/>
        <Checklist/><br/>
        As you can see, we design our dishes around the elements we discussed. Let's run through a few hypothetical examples.<br/><br/>
        <span className="bold">Ingredients on hand: </span>steak, vegetables, starches<br/>
        We will take these ingredients in a few different directions to create different dishes. In each of these dishes, the key ingredient is the steak. Before we start, we should notice a few things about steak: it’s hearty and rich in flavor.<br/><br/>
        <span className="bold">Asian Stir-Fry</span><br/>
        <Checklist
          flavors="salty, Asian"
          textures="crunchy, chewy"
          keyIngredient="steak"
          supportingIngredients="broccoli"
          sauce="soy sauce, salt & pepper, garlic, ginger"
          methods="stir-fry all ingredients"
        />
        <span className="bold italic">Explanation</span><br/>
        Broccoli balances the chewy texture with crunch and lightens the heartiness of the steak, the sauce satisfies our desired flavor profile, and stir-frying them incorporates the ingredients together.<br/><br/>
        <span className="bold">American Steak</span><br/>
        <Checklist
          flavors="salty, meaty, buttery, sweet"
          textures="creamy, chewy"
          keyIngredient="steak"
          supportingIngredients="asparagus, mashed potatoes"
          sauce="butter, onions"
          methods="pan-sear steak, boil the potatoes and asparagus"
        />
        <span className="bold italic">Explanation</span><br/>
        This dish is meant to be filling, so we complement the steak with creamy potatoes. The sauce brings out the flavor of the steak and improves the potatoes. This time, we pan-sear the steak to create a crust, and boil the other ingredients so they are soft in contrast.<br/><br/>
        <span className="bold">Beef Stroganoff</span><br/>
        <Checklist
          flavors="salty, meaty, mushroom, stroganoff"
          textures="creamy, deep, filling"
          keyIngredient="steak"
          supportingIngredients="egg noodles"
          sauce="mushrooms, butter, cream"
          methods="separately pan-fry cut steak and mushrooms, boil noodles"
        />
        <span className="bold italic">Explanation</span><br/>
        This dish is weighty, so we pair the steak with creamy mushrooms and sauce, and lighter noodles. Unlike the stir-fry, we cook the steak and mushrooms separately to create a contrast: crisp steak, and soft mushrooms.<br/><br/>
        Here’s the takeaway: none of these dishes are particularly innovative, but we are able to design them from the ground up by thinking about the fundamentals: flavor, texture, ingredients, sauce, and cooking methods.<br/><br/>
        <span className="italic">Note: flavors and textures are often heavily influenced by your options (your ingredients at hand), and that is ok.</span><br/>

      </div>
    </>
  );

};
//
// <span className="bold">Pan-Searing: </span>Cook individual ingredients
// <ul className="text__list">
//   <li>Cook one ingredient with a high level of control</li>
//   <li>Example: steak, control the cooking of the crust</li>
// </ul>
// <span className="bold">Stir-Frying: </span>Cook multiple ingredients
// <ul className="text__list">
//   <li>Like pan-searing, but with multiple ingredients</li>
//   <li>More efficient, but little less control for each ingredient</li>
//   <li>Example: vegetables with similar cook times</li>
// </ul>
// <span className="bold">Shallow-Frying: </span>Frying with less oil
// <ul className="text__list">
//   <li>Typically one individual ingredient at a time</li>
//   <li>Example: fish and chips because too much oil will make the fish soggy</li>
// </ul>
// <span className="bold">Deep-Frying: </span>Frying with plenty of oil to submerge ingredients
// <ul className="text__list">
//   <li>Can easily be used with multiple ingredients</li>
//   <li>Uses more oil than shallow frying</li>
//   <li>Example: fried chicken because it’s too thick to shallow fry and needs to be submerged to be fully cooked</li>
// </ul>
// <span className="bold">Boiling: </span>Boiling water to heat or cook items
// <ul className="text__list">
//   <li>Heat delicate ingredients, retain moisture</li>
//   <li>Example: vegetables because they cook easily and being submerged in water helps to cook it evenly</li>
// </ul>
// <span className="bold">Pan-Searing: </span>Cook individual ingredients
// <ul className="text__list">
//   <li>Cook one ingredient with a high level of control</li>
//   <li>Example: steak, control the cooking of the crust</li>
// </ul>
// <span className="bold">Poaching: </span>Rolling boiling water
// <ul className="text__list">
//   <li>Delicate version of boiling</li>
//   <li>Example: eggs because they cook quickly</li>
// </ul>
// <span className="bold">Steaming: </span>Gently cook food with moisture
// <ul className="text__list">
//   <li>Less aggressive than boiling and poaching</li>
//   <li>Example: steamed fish because fish is delicate it needs to cooked delicately or it will fall apart</li>
// </ul>
// <span className="bold">Sous-Vide: </span>Heat food through plastic bag
// <ul className="text__list">
//   <li>Gentler than steaming</li>
//   <li>Example: steak to gently cook throughly</li>
// </ul>
// <span className="bold">Baking: </span>Heat air to cook food
// <ul className="text__list">
//   <li>Much dryer, no water used</li>
//   <li>Example: roast chicken (any large piece of meat) to thoroughly cook the insides</li>
// </ul>
// <span className="bold">Grilling/Smoking: </span>Cooking on a grill over direct flame
// <ul className="text__list">
//   <li>Smoke and wood add flavor</li>
//   <li>Example: BBQ because direct flame gives bbq a unique flavor</li>
// </ul>
// <span className="bold">Other Options: </span>Air-Frying, Instant-Pot, Pressure-Cooker, Rice-Cooker
