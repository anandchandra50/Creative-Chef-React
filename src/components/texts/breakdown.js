import React from 'react';
import './text.css'

export default function Breakdown(props) {
  return (
    <>
      <div className="text__body">
        Now that we know how to taste dishes, let’s learn how to break them down.

        In addition to flavor, texture, and balance, there are <span className="bold">four key <span className="italic">tangible</span> elements</span> in every dish:
        <ol className="text__list">
          <li>Key Ingredients</li>
          <li>Supporting Ingredients</li>
          <li>Sauce</li>
          <li>Presentation</li>
        </ol>
        <br/>
        Let's dive into what they are.
        <br/><br/>
        <span className="bold">The key ingredients are the star of the dish</span>—the center of attention: the steak on a steak dish, the veggies in a salad, or the cheese in a grilled cheese. Without these ingredients, the dish doesn’t make sense.<br/><br/>
        The supporting ingredients provide balance. Let’s take a burger, for example. The key ingredients are the patty and buns—a burger is not a burger without those. The rest? Supporting ingredients. Cheese adds a creamy texture and salty flavor. Lettuce and tomatoes balance the saltiness of the cheese and prevent the burger from being dry. <span className="bold">Supporting ingredients round out the rough edges.</span> Use them intentionally—maybe you wouldn’t add tomatoes when your patty is extra juicy and your bun is spongy.<br/><br/>
        Next: sauce. Sauce brings the key and supporting ingredients together, and adds a layer of flavor. By itself, a patty can pack a lot of flavor, but <span className="bold">the right sauce will give it greater depth.</span> Foods that would normally be dry or bland on their own, like french fries or mashed potatoes, also shine with sauce.<br/><br/>
        And the final touches: presentation. The small touches: the wedge of lime served on the side. The colors. The extra drizzle of sauce around the plate. Etcetera.<br/><br/>
        Learn to identify each of these tangible elements in the food you eat.<br/><br/>
      </div>
    </>
  );

};
