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
    let nodes = []
    const { cards } = this.state
    var even;
    for (var i = 0; i < cards.length; i++) {
      if (i % 2 == 0) {
        even = cards[i]
      }
      else {
        nodes.push(
          <Box direction={'row'}  justify={'center'} align={'center'} key={i/2}>
            <CardNode cardID={even.id} amount={even.amount} num={i-1} key={i-1}/>
            <CardNode cardID={cards[i].id} amount={cards[i].amount} num={i} key={i}/>
          </Box>
        )
        even = null
      }
    }

    if (cards.length % 2 == 1) {
      var last = cards.length - 1
      nodes.push(
        <Box direction={'row'} justify={'center'} align={'center'} key={last/2+1}>
          <CardNode cardID={cards[last].id} amount={cards[last].amount} num={last} key={last}/>
        </Box>
      )
    }

    return (
      <Box justify={'center'} wrap={true}>
        {nodes}
      </Box>
    );
  }
}
