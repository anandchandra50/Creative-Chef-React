import React from 'react';
import './text.css'

export default function Composition(props) {
  return (
    <>
      <div className="text__body">
        Now let’s take what we’ve learned to make our own dishes.<br/><br/>
        <span className="bold">Making a dish boils down to two sets of choices: ingredient selection and cooking method.</span> Whether you have fifteen or fifty ingredients at hand, you can almost always pick out the right ingredients and cooking method to make a great dish.<br/><br/>
        Typically, I select key ingredients first, then build a supporting cast. When you make these choices, think about the intangible elements. Which ingredients will define the flavor? And the texture? What are the key ingredients’ strengths and weaknesses—how will you create balance?<br/><br/>
        <span className="italic">Regarding balance: it’s ok to duplicate flavors and textures across different ingredients, but be careful of situations in which everything tastes or feels the same. For example, pasta with a soft meat sauce works, but a puree on top of a risotto doesn’t.</span><br/><br/>
        After you have selected ingredients, choose your methods of cooking. Here are a few popular cooking methods you should be aware of, and their pros and cons. There are many video tutorials online if you want to learn more.<br/><br/>
        <span className="bold">Pan-Searing: </span>Cook individual ingredients
        <ul className="text__list">
          <li>Cook one ingredient with a high level of control</li>
          <li>Example: steak, control the cooking of the crust</li>
        </ul>
        <span className="bold">Stir-Frying: </span>Cook multiple ingredients
        <ul className="text__list">
          <li>Like pan-searing, but with multiple ingredients</li>
          <li>More efficient, but little less control for each ingredient</li>
          <li>Example: vegetables with similar cook times</li>
        </ul>
        <span className="bold">Shallow-Frying: </span>Frying with less oil
        <ul className="text__list">
          <li>Typically one individual ingredient at a time</li>
          <li>Example: fish and chips because too much oil will make the fish soggy</li>
        </ul>
        <span className="bold">Deep-Frying: </span>Frying with plenty of oil to submerge ingredients
        <ul className="text__list">
          <li>Can easily be used with multiple ingredients</li>
          <li>Uses more oil than shallow frying</li>
          <li>Example: fried chicken because it’s too thick to shallow fry and needs to be submerged to be fully cooked</li>
        </ul>
        <span className="bold">Boiling: </span>Boiling water to heat or cook items
        <ul className="text__list">
          <li>Heat delicate ingredients, retain moisture</li>
          <li>Example: vegetables because they cook easily and being submerged in water helps to cook it evenly</li>
        </ul>
        <span className="bold">Pan-Searing: </span>Cook individual ingredients
        <ul className="text__list">
          <li>Cook one ingredient with a high level of control</li>
          <li>Example: steak, control the cooking of the crust</li>
        </ul>
        <span className="bold">Poaching: </span>Rolling boiling water
        <ul className="text__list">
          <li>Delicate version of boiling</li>
          <li>Example: eggs because they cook quickly</li>
        </ul>
        <span className="bold">Steaming: </span>Gently cook food with moisture
        <ul className="text__list">
          <li>Less aggressive than boiling and poaching</li>
          <li>Example: steamed fish because fish is delicate it needs to cooked delicately or it will fall apart</li>
        </ul>
        <span className="bold">Sous-Vide: </span>Heat food through plastic bag
        <ul className="text__list">
          <li>Gentler than steaming</li>
          <li>Example: steak to gently cook throughly</li>
        </ul>
        <span className="bold">Baking: </span>Heat air to cook food
        <ul className="text__list">
          <li>Much dryer, no water used</li>
          <li>Example: roast chicken (any large piece of meat) to thoroughly cook the insides</li>
        </ul>
        <span className="bold">Grilling/Smoking: </span>Cooking on a grill over direct flame
        <ul className="text__list">
          <li>Smoke and wood add flavor</li>
          <li>Example: BBQ because direct flame gives bbq a unique flavor</li>
        </ul>
        <span className="bold">Other Options: </span>Air-Frying, Instant-Pot, Pressure-Cooker, Rice-Cooker
      </div>
    </>
  );

};
