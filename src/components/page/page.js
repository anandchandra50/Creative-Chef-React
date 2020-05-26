import React, { Component } from 'react';
import './page.css';
import MenuWeb from '../menu/menu-web.js';
import Intro from '../texts/intro.js';
import Palette from '../texts/palette.js';
import Breakdown from '../texts/breakdown.js';
import Composition from '../texts/composition.js';
import Examples from '../texts/examples.js';
import header from '../../images/header.svg';
import { isMobile } from "react-device-detect";


class Page extends Component {
  state = {
    page: 'Home',
  };

  switchPage = item => {
    this.setState({page:item});
  };

  pageBody(page) {
    switch (page) {
      case 'Home':
        return <Intro showNextPage={() => this.switchPage('Palette')}/>;
      case 'Palette':
        return <Palette showNextPage={() => this.switchPage('Breakdown')}/>;
      case 'Breakdown':
        return <Breakdown showNextPage={() => this.switchPage('Composition')}/>;
      case 'Composition':
        return <Composition showNextPage={() => this.switchPage('Examples')}/>;
      case 'Examples':
        return <Examples showNextPage={() => this.switchPage('Home')}/>;
      default: break;
    }
  }

  pageHeader(page) {
    switch (page) {
      case 'Home':
        return <div className="text__header text__header-home">Independent Chef</div>
      case 'Home Mobile':
        return <div className="text__header text__header-home">Introduction</div>
      default:
        return <div className="text__header">{page}</div>
    }
  }

  webRender() {
    const containerClass = (this.state.page === 'Home') ? 'text-container text-container-home' : 'text-container';
    return (
      <div>
        <div className={containerClass}>
          {this.pageHeader(this.state.page)}
          {this.pageBody(this.state.page)}
        </div>

        <MenuWeb
          selected={this.state.page}
          menuNames={['Home', 'Palette', 'Breakdown', 'Composition', 'Examples']}
          handleMenuChange={this.switchPage}
        />
      </div>
    );
  }

  mobileRender() {
    const pages = ['Home', 'Palette', 'Breakdown', 'Composition', 'Examples'];
    return (
      <div className="container">
        <div className="header">Independent Chef</div>
        {pages.map((page) => (
          <>
            {this.pageHeader(page === 'Home' ? 'Home Mobile' : page)}
            {this.pageBody(page)}
          </>
        ))}
      </div>
    );
  }

  render() {
    return (
      isMobile ? this.mobileRender() : this.webRender()
    );
  }
}

export default Page;
