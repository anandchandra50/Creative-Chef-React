import React from 'react';
import './text.css'

export default function Breakdown(props) {
  return (
    <>
      <div className="text__body">
        Now that we know how to taste dishes, let’s break them down.<br/><br/>

        Every dish is made up of <span className="bold">four elements:</span>
        <ol className="text__list">
          <li>Key Ingredients</li>
          <li>Supporting Ingredients</li>
          <li>Sauce</li>
          <li>Cooking Methods</li>
        </ol>
        <br/>
        <span className="bold">The key ingredients are the star of the dish</span>—the center of attention: the steak on a steak dish, the veggies in a salad, or the cheese in a grilled cheese. Without these ingredients, the dish doesn’t make sense.<br/><br/>
        The supporting ingredients provide balance. Let’s take a burger, for example. The key ingredients are the patty and buns—a burger is not a burger without those. The rest? Supporting ingredients. Cheese adds a creamy texture and salty flavor. Lettuce and tomatoes balance the saltiness of the cheese and prevent the burger from being dry. <span className="bold">Supporting ingredients round out the rough edges.</span> Use them intentionally—maybe you wouldn’t add tomatoes when your patty is extra juicy and your bun is spongy.<br/><br/>
        Next: sauce. Sauce brings the key and supporting ingredients together, and adds a layer of flavor. By itself, a patty can pack a lot of flavor, but <span className="bold">with the right sauce, it will display greater depth.</span> Foods at risk of being dry or bland, like french fries or mashed potatoes, also shine with sauce.<br/><br/>
        And finally, the cooking methods bring everything together. Like the other elements, cooking methods are intentionally chosen. For example, searing a steak gives it a crusted exterior, whereas slicing and stir-frying it with vegetables creates a chewier texture.<br/><br/>
        If you are aesthetically oriented, pay attention to the presentation. The wedge of lime served on the side. The colors. The extra drizzle of sauce around the plate. Etcetera.<br/><br/>
        Take mental notes on the key and supporting ingredients, sauce, and cooking methods used in the food you eat.<br/><br/>
      </div>
    </>
  );

};
