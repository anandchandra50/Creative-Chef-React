import React, { Component } from 'react';
import './page.css';
import MenuWeb from '../menu/menu-web.js';
import Intro from '../texts/intro.js';
import header from '../../images/header.svg';

class Page extends Component {
  state = {
    page: 'Home',
  };

  switchPage = item => {
    this.setState({page:item});
  };

  textSwitch() {
    switch (this.state.page) {
      case 'Intro':
        return <Intro showNextPage={() => this.switchPage('Palette')}/>;
      default: break;
    }
  }

  render() {
    return (
      <>
        {(this.state.page === 'Home') ?
        <img className="logo" src={header}/>
        :
        <div className="text-container">
          <div className="text__header">{this.state.page}</div>
          {this.textSwitch()}
        </div>
        }
        <MenuWeb
          selected={this.state.page}
          menuNames={['Home', 'Intro', 'Palette', 'Breakdown', 'Composition', 'Examples']}
          handleMenuChange={this.switchPage}
        />
      </>
    );
  }
}

export default Page;
