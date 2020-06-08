import React, { Component } from 'react';
import './menu-web.css';

export default class MenuWeb extends Component {
  handleMenuChange = (item) => {
    this.props.handleMenuChange(item);
  }

  render() {
    const selectedClass = 'menu-web__item menu-web__item-selected menu-web__item-selected-' + this.props.selected;
    const unselectedClass = 'menu-web__item';
    return (
      <>
        <div className="menu-web__description">Read through in order</div>
        <div className="menu-web">
          {this.props.menuNames.map((item, index) =>
            <div
              key={item}
              className={this.props.menuItems[index] === this.props.selected ? selectedClass : unselectedClass}
              onClick={() => this.handleMenuChange(this.props.menuItems[index])}
            >
              &nbsp;{item}&nbsp;
            </div>
          )}
        </div>
      </>
    );
  }
}
