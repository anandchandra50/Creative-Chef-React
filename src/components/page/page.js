import React, { Component } from 'react';
import './page.css';
import MenuWeb from '../menu/menu-web.js';
import Intro from '../texts/intro.js';
import Palette from '../texts/palette.js';
import Breakdown from '../texts/breakdown.js';
import Composition from '../texts/composition.js';
import Examples from '../texts/examples.js';
import header from '../../images/header.svg';
import { useSwipeable, Swipeable } from 'react-swipeable';

class Page extends Component {
  state = {
    page: 'Home',
  };

  componentDidMount() {
    console.log('moutned');
  }

  switchPage = item => {
    this.setState({page:item});
  };

  displayPage(page) {
    switch (page) {
      case 'Intro':
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

  render() {
    const allPages = ['Intro', 'Palette', 'Breakdown', 'Composition', 'Examples'];
    return (
      <div className="page">
        <img alt="logo" className="logo" src={header}/>
        <div className="text-container">
          {allPages.map((page) => (
            <>
              <div className="text__header">{page}</div>
              {this.displayPage(page)}
            </>
          ))}

        </div>
        }
        <MenuWeb
          selected={this.state.page}
          menuNames={['Home', 'Intro', 'Palette', 'Breakdown', 'Composition', 'Examples']}
          handleMenuChange={this.switchPage}
        />
      </div>
    );
  }
}

export default Page;
