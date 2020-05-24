import React, { Component } from 'react';
import './menu-web.css';

export default class MenuWeb extends Component {
  handleMenuChange = (item) => {
    this.props.handleMenuChange(item);
  }

  render() {
    const shortMenus = ['Home', 'Intro', 'Palette'];

    const selectedClass = shortMenus.includes(this.props.selected) ? 'menu-web__item menu-web__item-selected' : 'menu-web__item menu-web__item-selected menu-web__item-selected-long';
    const unselectedClass = 'menu-web__item';
    return (
      <>
        <div className="menu-web">
          {this.props.menuNames.map((item) =>
            <div
              key={item}
              className={item === this.props.selected ? selectedClass : unselectedClass}
              onClick={() => this.handleMenuChange(item)}
            >
              &nbsp;{item}&nbsp;
            </div>
          )}
        </div>
      </>
    );
  }
}
