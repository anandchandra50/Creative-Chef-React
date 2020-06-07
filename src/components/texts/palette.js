import React from 'react';
import './text.css'

export default function Palette(props) {
  // <span className="italic">Requirements: None</span><br/>
  return (
    <>
      <div className="text__body">
        Before we talk about recipes and cooking, we need to discuss something more basic: tasting. Think about the last meal you ate. Really, take a second and think about it. What was good about it? What was not as good? What did it feel like? What flavors stood out? What flavors were subtle, but noticeable?<br/><br/>
        Did you come up with a few answers?<br/><br/>
        It’s ok if you couldn't answer everything. But this is a skill you can develop with practice. And consider this: there are two chefs, one who can answer these questions and one who can’t. Who would you rather cook your meal?<br/><br/>

        The <span className="bold">two main traits</span> to pay attention to are:
        <ol className="text__list">
          <li>Flavor</li>
          <li>Texture</li>
        </ol>
        <br/>
        What does this look like?
        <br/><br/>
        When you take your first bite, try closing your eyes and listing the flavors that pop up in your mind. Is it salty, spicy, sweet, sour, bitter, or gamey? A combination? As you detect flavors, separate them into two categories: flavors that you like and work well together, and flavors you don’t like as much.<br/><br/>
        Let’s say you’re eating a steak dish. Maybe you taste salt and pepper from the seasoning, game from the steak, and a mushroom flavor from the sauce. <span className="bold">If you list and categorize these flavors, you can expand your cooking toolkit.</span><br/><br/>
        Next, just like flavors, try to identify textures. Close your eyes and feel the food. Is it crunchy, smooth, thick, soft, or chewy? Consider these textures the way you do the flavors.<br/><br/>
        <span className="italic">Note: it’s ok if you can’t give a name to everything you taste and feel. Just remember what you can.</span><br/><br/>
        Once you are comfortable with flavor and texture, pay attention to balance. Your perfect steak, an A5 Wagyu, would get boring by itself. An average ribeye with roasted potatoes and creamed spinach is much more interesting. Try to identify how the different pieces fit against each other.<br/><br/>
        <span className="bold">The goal is to be able to identify flavors and textures.</span> The more dishes you taste intentionally, thinking about this, the more experience you will have to recreate the flavor and texture combinations you like.<br/><br/>
      </div>
    </>
  );

};
