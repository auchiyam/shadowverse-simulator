import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import HeadLine from 'grommet/components/HeadLine'
import Button from 'grommet/components/Button'

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClickStart(1)
  }

  render() {
    var message = "Deck Builder v2000"
    return (
      <Box align={'center'} justify={'center'} full={true}>
        <HeadLine align={'center'}>{message}</HeadLine>
        <Button primary={true} label={'Start'} onClick={this.handleClick}></Button>
      </Box>
    );
  }
}
