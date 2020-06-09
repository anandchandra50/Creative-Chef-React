import React from 'react';
import Page from './components/page/page.js';
// import MobileGuide from './components/mobile/mobile-guide.js';
// import MobileCheatsheet from './components/mobile/mobile-cheatsheets.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { isMobile } from "react-device-detect";

function App() {
  return (
    <Router>
      {isMobile ?
        <Switch>
          <Route path="/guide"><Page mobilePage="Guide"/></Route>
          <Route path="/cheatsheets"><Page mobilePage="Cheatsheet"/></Route>
          <Route path="/"><Page mobilePage="Home"/></Route>
        </Switch>
         : <Page/>}
    </Router>
  );
}

export default App;
