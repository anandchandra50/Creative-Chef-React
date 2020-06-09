import React from 'react';
import './text.css'

export default function Palette(props) {
  // <span className="italic">Requirements: None</span><br/>
  return (
    <>
      <div className="text__body">
        Before we talk about recipes and cooking, we need to discuss something more basic: tasting. Think about the last meal you ate. Really, take a second and think about it. What was good about it? What flavors stood out?<br/><br/>
        Did you come up with a few answers? It’s ok if you couldn't answer everything, this is a skill you can develop with practice.<br/><br/>

        The <span className="bold">two main traits</span> to pay attention to are:
        <ol className="text__list">
          <li>Flavor</li>
          <li>Texture</li>
        </ol>
        <br/>
        Let’s say you’re eating a steak dish. Maybe you taste salt and pepper from the seasoning, game from the steak, and a mushroom flavor from the sauce. <span className="bold">Remember these flavor combinations, and use them when you cook.</span><br/><br/>
        Next, just like flavors, try to identify textures. Close your eyes and feel the food. Is it crunchy, smooth, thick, soft, or chewy? Consider these textures the way you do the flavors.<br/><br/>
        Once you are comfortable with flavor and texture, pay attention to balance. For example, your perfect steak, an A5 Wagyu, would get boring by itself. An average ribeye with roasted potatoes and creamed spinach is much more interesting. <span className="bold">Try to identify how the different pieces fit against each other.</span><br/><br/>
        <span className="bold">The goal is to be able to identify flavors and textures.</span> The more dishes you taste intentionally, the more experience you will have to recreate the flavor and texture combinations you like.
      </div>
    </>
  );

};
