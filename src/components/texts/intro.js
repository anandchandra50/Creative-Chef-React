import React from 'react';
import './text.css'

export default function Intro(props) {
  return (
    <>
      <div className="text__body">
        This is not a recipe book. This is not kitchen instruction. This is a guide to becoming an independent chef. I hope to offer a set of fundamentals and actionable steps to give you a deeper understanding of food. This should be read as a complete guide, but if you’re looking for the cheatsheets, you’ll find them&nbsp;
        <span className="underline pointer" onClick={props.showExamples}>here</span>.<br/><br/>
        Regardless of your skill level, I hope that by the end, you understand the fundamentals of dish composition, and gain the confidence that you can create your own dishes in the kitchen, independent from recipes.<br/><br/>

        The structure of the guide:
        <ol className="text__list">
          <li>Palette: how to taste food intentionally</li>
          <li>Dish Breakdown: the different parts in every dish</li>
          <li>Dish Construction: apply theory to create new dishes</li>
          <li>Cheatsheets: flavor and cooking method cheat sheets for your use</li>
        </ol>
        <br/>
        Like any other skill, practice is key. You won’t get good at cooking just by reading this guide. The more you practice thinking and cooking this way, the more confident you will become in making your own dishes. Let’s get started.
      </div>
    </>
  );

};
