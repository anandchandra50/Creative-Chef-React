import React, { Component } from 'react';
import './page.css';
import MenuWeb from '../menu/menu-web.js';
import Intro from '../texts/intro.js';
import Palette from '../texts/palette.js';
import Breakdown from '../texts/breakdown.js';
import Composition from '../texts/composition.js';
import Examples from '../texts/examples.js';
import Closing from '../texts/closing.js';
import { isMobile } from "react-device-detect";
import logo from '../../images/logo.svg';
import mobileLogo from '../../images/mobile-logo.svg';
import posed from 'react-pose';

const animationDuration = 300;
const TextSlide = posed.div({
  hidden: {
    opacity: 0,
    transition: { duration: animationDuration },
  },
  visible: {
    opacity: 1,
    transition: { duration: animationDuration },
  },
});

const ImageSlide = posed.img({
  hidden: {
    opacity: 0,
    transition: { duration: animationDuration },
  },
  visible: {
    opacity: 1,
    transition: { duration: animationDuration },
  },
});

class Page extends Component {
  state = {
    page: 'Home',
    isCurrentPageVisible: true,
  };

  switchPage = item => {
    if (this.state.page === 'Home') {
      this.setState({ isCurrentPageVisible: false });
      this.timeout = setTimeout(() => {
        this.setState({ page: item });
      }, animationDuration);
      this.timeout = setTimeout(() => {
        window.scrollTo(0, 0);
        this.setState({ isCurrentPageVisible: true });
      }, animationDuration);
    } else {
      this.setState({ isCurrentPageVisible: false });
      this.timeout = setTimeout(() => {
        window.scrollTo(0, 0);
        this.setState({ page: item, isCurrentPageVisible: true });
      }, animationDuration);
    }

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
        return <Intro showExamples={() => console.log('Downloading')}/>;
      case 'Palette':
        return <Palette/>;
      case 'Breakdown':
        return <Breakdown/>;
      case 'Composition':
        return <Composition/>;
      case 'Examples':
        return <Examples/>;
      case 'Closing':
        return <Closing/>;
      default: break;
    }
  }

  pageHeader(page) {
    switch (page) {
      case 'Home':
        return
      case 'Intro':
      case 'Home Mobile':
        return <div className="text__header text__header-home">Introduction</div>
      case 'Breakdown':
        return <div className="text__header">Analyzing Dishes</div>
      case 'Composition':
        return <div className="text__header">Creating a Dish</div>
      case 'Examples':
        return <div className="text__header">Cheatsheets</div>
      default:
        return <div className="text__header">{page}</div>
    }
  }

  webRender() {
    return (
      <>
        {this.state.page === 'Home' &&
        <ImageSlide
          className="logo noselect"
          src={logo}
          alt="logo"
          pose={this.state.isCurrentPageVisible ? 'visible' : 'hidden'}
        />}
        <MenuWeb
          selected={this.state.page}
          menuItems={['Home', 'Intro', 'Palette', 'Breakdown', 'Composition', 'Examples', 'Closing']}
          menuNames={['Home', 'Introduction', 'Palette', 'Analyzing Dishes', 'Creating a Dish', 'Cheatsheets', 'Closing']}
          handleMenuChange={this.switchPage}
        />
        {this.state.page !== 'Home' &&
        <TextSlide
          className="container"
          pose={this.state.isCurrentPageVisible ? 'visible' : 'hidden'}
        >
          <div className="page-container">
              {this.pageHeader(this.state.page)}
              {this.pageBody(this.state.page)}
          </div>
        </TextSlide>}
      </>
    );
  }

  mobileRender() {
    const pages = ['Intro', 'Palette', 'Breakdown', 'Composition', 'Examples', 'Closing'];
    return (
      <div className="container">
        <img className="logo-mobile" src={mobileLogo} alt="logo"/>
        <div className="container-text">
          {pages.map((page) => (
            <>
              {page !== 'Intro' && this.pageHeader(page)}
              {this.pageBody(page)}
            </>
          ))}
        </div>
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
