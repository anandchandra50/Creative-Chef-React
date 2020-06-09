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
        Hopefully, the theory we’ve covered makes sense to you. Becoming an independent chef will take time and practice, and <span className="bold">to help you get started, we’ve created two cheatsheets:</span> flavor profiles, and cooking methods.<br/><br/>
        These are meant as a starting point to create dishes without a recipe—we hope you can eventually create your own flavor combinations and move away from these cheatsheets altogether.<br/><br/>
        A few notes: add seasoning slowly, and taste frequently. Our ratios are estimates, and should be adjusted for each dish.<br/><br/>
        <span className="italic">These are designed for easy access on your phone. Click to download.</span><br/><br/>
        {isMobile ?
          <>
            View: <a className="link" href={flavorCheatsheet1} target="_blank">Flavor Profiles 1</a><br/>
            View: <a className="link" href={flavorCheatsheet2} target="_blank">Flavor Profiles 2</a><br/>
            View: <a className="link" href={cookingMethodsCheatsheet} target="_blank">Cooking Methods</a>
          </>
          :
          <>
            Flavor Profiles:
            <a href={flavorCheatsheet1} download><img className="cheatsheet" src={flavorCheatsheet1} alt="Flavor Cheatsheet 1"/></a><br/>
            <a href={flavorCheatsheet2} download><img className="cheatsheet" src={flavorCheatsheet2} alt="Flavor Cheatsheet 2"/></a><br/>
            <br/>
            Cooking Methods:
            <a href={cookingMethodsCheatsheet} download><img className="cheatsheet" src={cookingMethodsCheatsheet} alt="Cooking Methods Cheatsheet"/></a><br/>
          </>
        }
      </div>
    </>
  );

};
