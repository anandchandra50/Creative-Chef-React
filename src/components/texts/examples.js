import React from 'react';
import './text.css';
import { isMobile } from "react-device-detect";
import flavorCheatsheet1 from '../../images/flavor-cheatsheet-1.png';
import flavorCheatsheet2 from '../../images/flavor-cheatsheet-2.png';
import cookingMethodsCheatsheet from '../../images/cooking-methods-cheatsheet.png';

export default function Examples(props) {
  return (
    <>
      <div className="text__body">
        Hopefully, the theory we’ve covered makes sense to you. Becoming an independent chef will take time and practice, and <span className="bold">to help you get started, we’ve created two cheatsheets: flavor profiles, and cooking methods.</span><br/><br/>
        These are meant as a starting point to create dishes without a recipe—we hope you can eventually create your own flavor combinations and move away from these cheatsheets altogether.<br/><br/>
        A few notes: add seasoning slowly, and taste frequently. Our ratios are estimates, and should be adjusted for each dish.<br/><br/>
        <span className="italic">These are designed for easy access on your phone.</span><br/><br/>
        {isMobile ?
          <>
            <a className="link" href={flavorCheatsheet1} target="_blank">Flavor Profiles 1</a><br/>
            <a className="link" href={flavorCheatsheet2} target="_blank">Flavor Profiles 2</a><br/>
            <a className="link" href={cookingMethodsCheatsheet} target="_blank">Cooking Methods</a>
          </>
          :
          <>
            <a className="link" href={flavorCheatsheet1} download>Flavor Profiles 1</a><br/>
            <a className="link" href={flavorCheatsheet2} download>Flavor Profiles 2</a><br/>
            <a className="link" href={cookingMethodsCheatsheet} download>Cooking Methods</a>
          </>
        }
        <br/><br/>
        We hope we have armed you with the tools you need to become an independent chef. Go out and apply what you have learned. Bad dishes and failure are inevitable; learn from them. We believe in you!<br/><br/>
        Tell us your stories, questions, and suggestions: [filleremail]@gmail.com<br/><br/>
        Keep up with us:<br/>
        <a href="https://www.instagram.com/anand.chandra/" target="_blank">@anand.chandra</a><br/>
        <a href="https://www.instagram.com/nathan.siu/" target="_blank">@nathan.siu</a><br/>
      </div>
    </>
  );

};
