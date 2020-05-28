import React, { Component } from 'react';
import './page.css';
import MenuWeb from '../menu/menu-web.js';
import Intro from '../texts/intro.js';
import Palette from '../texts/palette.js';
import Breakdown from '../texts/breakdown.js';
import Composition from '../texts/composition.js';
import Examples from '../texts/examples.js';
import header from '../../images/header.svg';
import highlight from '../../images/highlight.svg';
import { isMobile } from "react-device-detect";
import logo from '../../images/left-logo.svg';


class Page extends Component {
  state = {
    page: 'Home',
  };

  switchPage = item => {
    this.setState({page:item});
  };

  defineNavigation = page => {
    var nextPage = '';
    var prevPage = '';
    switch(page) {
      case 'Home':
        nextPage = 'Intro';
        break;
      case 'Intro':
        nextPage = 'Palette';
        prevPage = 'Home';
        break;
      case 'Palette':
        nextPage = 'Breakdown';
        prevPage = 'Intro';
        break;
      case 'Breakdown':
        nextPage = 'Composition';
        prevPage = 'Palette';
        break;
      case 'Composition':
        nextPage = 'Examples';
        prevPage = 'Breakdown';
        break;
      case 'Examples':
        prevPage = 'Composition';
        break;
      default: break;
    }
    return [nextPage, prevPage];
  }

  pageBody(page) {
    switch (page) {
      case 'Intro':
        return <Intro/>;
      case 'Palette':
        return <Palette/>;
      case 'Breakdown':
        return <Breakdown/>;
      case 'Composition':
        return <Composition/>;
      case 'Examples':
        return <Examples/>;
      default: break;
    }
  }

  pageHeader(page) {
    switch (page) {
      case 'Home':
        return
      case 'Home Mobile':
        return <div className="text__header text__header-home">Introduction</div>
      default:
        return <div className="text__header">{page}</div>
    }
  }

  webRender() {
    const navigation = this.defineNavigation(this.state.page);
    const nextPage = navigation[0];
    const prevPage = navigation[1];
    // const longPages = ['Breakdown', 'Composition'];
    // const pageButtonClass = (longPages.includes(nextPage) || longPages.includes(prevPage)) ? 'page-button page-button-long' : 'page-button';
    // console.log(pageButtonClass);
    return (
      <>
        {this.state.page === 'Home' &&
        <img
          className="logo noselect"
          src={logo}
          alt="logo"
        />}
        {nextPage !== '' &&
        <div
          className="page-button page-button-next"
          onClick={() => this.switchPage(nextPage)}
        >
          <img className="page-button__element page-button__image" src={highlight} alt="highlight"/>
          <div className="page-button__element page-button__text noselect">{this.state.page === 'Home' ? 'Intro' : 'Next'}</div>
        </div>}
        {prevPage !== '' &&
        <div
          className={nextPage === '' ? "page-button": "page-button page-button-prev"}
          onClick={() => this.switchPage(prevPage)}
        >

          <img className="page-button__element page-button__image" src={highlight} alt="highlight"/>
          <div className="page-button__element page-button__text noselect">PREV</div>
        </div>}
        {this.state.page !== 'Home' &&
        <div className="container">


          <div className="page-container">
              {this.pageHeader(this.state.page)}
              {this.pageBody(this.state.page)}
          </div>
        </div>}
      </>
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
