import React from 'react';
import './text.css';
import { isMobile } from "react-device-detect";
import flavorCheatsheet from '../../images/flavor-cheatsheet.png';

export default function Examples(props) {
  return (
    <>
      <div className="text__body">
        Here’s a set of flavor profiles and cooking methods that I like. Feel free to use these and experiment however you’d like.<br/><br/>
        {isMobile ?
          <a className="link" href={flavorCheatsheet} target="_blank">Flavor Profiles</a>
          :
          <a className="link" href={flavorCheatsheet} download>Flavor Profiles</a>
        }
      </div>
    </>
  );

};
