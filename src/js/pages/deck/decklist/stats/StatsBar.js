import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import SVGIcon from 'grommet/components/SVGIcon'
import Label from 'grommet/components/Label'

export default class StatsBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { cost, count, max } = this.props
    let maxHeight = 200
    let height = maxHeight * ((count * 1.0) / max)
    let width = 50
    let y = maxHeight - height
    let view = '0 0 ' + width.toString() + " " + maxHeight.toString()
    return (
      <Box justify={'center'} align={'center'}>
        <Label size={'small'}>{count}</Label>
        <SVGIcon viewBox={view} size={'medium'} style={{width: '20px'}}>
          <g stroke='none'
            fill='#FFFFFF'
          >
            <rect x="0" y={y.toString()} width={width.toString()} height={height.toString()} />
          </g>
        </SVGIcon>
        <Label size={'small'}>{cost}</Label>
      </Box>
    )
  }
}
