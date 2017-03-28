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

    return (
      <div>
        <Split flex={'right'}>
          <DeckList />
          <Box>
            <Filter />
            <CardList />
          </Box>
        </Split>
      </div>
    );
  }
}
