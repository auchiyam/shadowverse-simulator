import React, { Component } from 'react'

import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Animate from 'grommet/components/Animate'

import DeckList from './deck/DeckList'
import CardList from './deck/CardList'
import Filter from './deck/Filter'

import CardNode from './deck/decklist/deckcards/CardNode'

export default class DeckPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: -1,
      cards: {},
    }
  }

  render() {
    /*
    <Filter />
    <CardList />
    */

    if (this.state.class == -1) {

    }

    return (
      <Split flex={'right'}>
        <Animate enter={{animation: 'slide-right', duration:500}}>
          <DeckList />
        </Animate>
        <Box>
          
        </Box>
      </Split>
    );
  }
}
