import React from 'react';
import './text.css'

export default function Composition(props) {
  return (
    <>
      <div className="text__body">
        COMPOSITION SLDKFJ LSKDFJ
        <ol className="text__list">
          <li>Think about your palette, and how to taste food intentionally</li>
          <li>Understand the fundamentals of what makes a great dish</li>
          <li>Apply those fundamentals to create your own dishes</li>
          <li>Examples that put it all together</li>
        </ol>
        <br/>
        We hope these sections will show you the open-endedness and limitless possibilities within food.
        <br/><br/>

        Lastly, practice is key. As mentioned before, food is an art, and like any other art, you won’t get good at it just by reading this guide. The more you practice thinking and cooking this way, the more confident you will become in making your own dishes. Let’s get started:&nbsp;
        <span
          className="text__segue"
          onClick={props.showNextPage}
        >
          Palette
        </span>
      </div>
      <div className="text__summary">
      In 30 seconds: Prepare to see food differently.
      </div>
    </>
  );

};
