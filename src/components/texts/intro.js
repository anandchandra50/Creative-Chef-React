import React, { Component } from 'react';
import './text.css'

export default function Intro(props) {
  return (
    <>
      <div className="text__body">
        Music is an art to the ear, fragrances an art to the nose, and paintings an art to the eyes. Cooking is an art that incorporates all of these senses in one piece. In a great meal, the food looks good, smells amazing, and tastes even better. Once you start to think about food as an art, you’re already part way there.<br/><br/>
        Before you read further, you should understand our purpose. This is not a recipe book. This is not kitchen instruction. This is a guide to becoming a better creative chef. We hope to offer different perspectives and actionable steps to make you think about food differently.<br/><br/>
        If you cook, even occasionally, we hope that by the end, you gain a new perspective, and confidence that you can create your own artistic pieces in the kitchen, independent from recipes. If you don’t cook, we hope that you can think about the food and meals you eat in a different light.<br/><br/>
        The structure of the guide is as follows:
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
