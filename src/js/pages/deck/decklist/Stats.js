import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Split from 'grommet/components/Split'

import StatsBar from './stats/StatsBar'


export default class Stats extends Component {
  constructor(props) {
    super(props);
  }

  makeBarGraph(costCount) {
    var columns = []
    var lastColumn = 0
    var max = 0
    for (var i = 0; i < costCount.length; i++) {
      var col = i + 1
      if (costCount[i] > max || lastColumn > max) {
        max = Math.max(costCount[i], lastColumn)
      }
      if (col >= 8) {
        lastColumn = lastColumn + costCount[i]
      }
      else {
        columns.push(costCount[i])
      }
    }
    columns.push(lastColumn)

    return columns.map(function(x, index){
      col = index + 1
      if (col >= 8) {
        return <StatsBar key={index} cost={'8+'} max={max} count={x}/>
      }
      else {
        return <StatsBar key={index} cost={col.toString()} max={max} count={x}/>
      }
    })
  }

  render() {
    const { costCount, total } = this.props
    var graph = this.makeBarGraph(costCount)

    return (
      <Box direction={'row'}>
        <Box direction={'row'} justify={'center'}>
          {graph}
        </Box>
        <Box align={'end'} justify={'center'} pad={'small'}>
          <Label size={'small'}>{total.followers}</Label>
          <Label size={'small'}>{total.spells}</Label>
          <Label size={'small'}>{total.amulets}</Label>
          <Label size={'small'}>{total.total}</Label>
        </Box>
        <Box justify={'center'}>
          <Label size={'small'} uppercase={true}>| followers</Label>
          <Label size={'small'} uppercase={true}>| spells</Label>
          <Label size={'small'} uppercase={true}>| amulets</Label>
          <Label size={'small'} uppercase={true}>| total</Label>
        </Box>
      </Box>
    );
  }
}
