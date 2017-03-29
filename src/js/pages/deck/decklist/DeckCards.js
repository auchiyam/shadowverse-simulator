import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import Layer from 'grommet/components/Layer'

import CardNode from './deckcards/CardNode'

export default class DeckCards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: this.props.cards
    }
  }

  render() {
    let cards = this.state.cards.map(function(x, index) {
      return <CardNode cardID={x.id} key={index} num={index} amount={x.amount} />
    })

    return (
      <Box direction={'row'} justify={'center'} wrap={true}>
        {cards}
      </Box>
    );
  }
}
