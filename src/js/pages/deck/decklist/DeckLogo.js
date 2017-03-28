import React, { Component } from 'react'
import SVGIcon from 'grommet/components/SVGIcon';

export default class DeckLogo extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { color } = this.props

    return (
      <SVGIcon viewBox='0 0 80 100' style={{float: 'left'}}
        version='1.1'
        type='logo'>
        <g
          stroke={color}
          strokeWidth='3'
          fill='none'
          strokeLinecap='round'
          >
          <path d="M10,10 L10,70" />
          <path d="M10,70 L50,70" />
          <path d="M50,70 L50,10" />
          <path d="M50,10 L10,10" />
          <path d="M20,75 L20,80 L60,80 L60,20 L55,20" />
        </g>
      </SVGIcon>
    );
  }
}
