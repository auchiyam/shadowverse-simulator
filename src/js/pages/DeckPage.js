import React, { Component } from 'react'

import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'

import DeckList from './deck/DeckList'
import CardList from './deck/CardList'
import Filter from './deck/Filter'

export default class DeckPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: -1,
      cards: {},
    }
  }

  render() {

    if (this.state.class == -1) {

    }

    return (
      <Split flex={'right'}>
        <DeckList />
        <Box full={'vertical'} justify={'center'}>
          <Filter />
          <CardList />
        </Box>
      </Split>
    );
  }
}
