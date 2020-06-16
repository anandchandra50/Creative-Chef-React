import React from 'react';
import './text.css';
// import BreakdownImage from '../../images/dish-analysis.svg';
import BreakdownImage from '../../images/burger-deconstructed.svg';

export default function Breakdown(props) {
  return (
    <>
      <div className="text__body">
        Now that we know how to taste dishes, let’s break them down.<br/><br/>

        Every dish is made up of <span className="bold">five elements:</span>
        <ol className="text__list">
          <li>Key Ingredients</li>
          <li>Supporting Ingredients</li>
          <li>Sauce</li>
          <li>Cooking Methods</li>
          <li>Presentation</li>
        </ol>
        <br/>
        <span className="bold">The key ingredients are the star of the dish</span>—the center of attention: the steak on a steak dish, the veggies in a salad, or the cheese in a grilled cheese. Without these ingredients, the dish doesn’t make sense.<br/><br/>
        The supporting ingredients provide balance. Let’s take a burger, for example. The key ingredients are the patty and buns—a burger is not a burger without those. The rest? Supporting ingredients. Cheese adds a creamy texture and salty flavor. Lettuce and tomatoes balance the saltiness of the cheese and prevent the burger from being dry. <span className="bold">Supporting ingredients round out the rough edges.</span><br/><br/>
        Next: sauce. Sauce brings the key and supporting ingredients together, and adds a layer of flavor. By itself, a patty can pack a lot of flavor, but <span className="bold">with the right sauce, it will display greater depth.</span> Foods at risk of being dry or bland, like french fries or mashed potatoes, also shine with sauce.<br/><br/>
        <span className="bold">The cooking methods bring all components together.</span> Like the other elements, cooking methods are intentionally chosen: searing a fish filet develops a crusted exterior, whereas steaming it creates a smooth bite.<br/><br/>
        Presentation is the finishing touch: the layering, garnish, and colors. It’s serving curry over rice, sprinkling parsley and grated cheese over pasta, and drizzling white heavy cream over red tomato soup. Each of these additions improve the visual appeal: <span className="bold">presentation transforms food into art.</span><br/><br/>
        <span className="bold">Visualize</span><br/><br/>
        <img className="img-breakdown" src={BreakdownImage} alt="Breakdown"/>
      </div>
    </>
  );

};
