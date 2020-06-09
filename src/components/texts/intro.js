import React from 'react';
import './text.css'

export default function Intro(props) {
  return (
    <>
      <div className="text__body">
        To begin, let us introduce ourselves. This guide is written by Nathan and Anand, two relatively experienced home chefs. <span className="bold">Together, we want to help you become an independent chef: a chef confident in creating and cooking dishes from scratch.</span><br/><br/>
        Ideally, you have some experience in the kitchen and feel comfortable following recipes, but even if this is not the case, don’t be afraid to follow along.<br/><br/>

        The structure of the guide:
        <ol className="text__list">
          <li>Palette</li>
          <li>Analyzing Dishes</li>
          <li>Creating a Dish</li>
          <li>Cheatsheets</li>
          <li>Closing</li>
        </ol>
        <br/>
        Let’s get started.
      </div>
    </>
  );

};
