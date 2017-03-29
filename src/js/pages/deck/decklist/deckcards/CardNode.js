import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import Canvas from 'react-canvas-component'

export default class CardNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardID: this.props.cardID,
      amount: this.props.amount,
      key: this.props.num,
      rotate: 0
    }

    if (this.state.key % 2 == 0) {
      this.state.rotate = 1
    }
    else {
      this.state.rotate = -1
    }

    this.drawCanvas = this.drawCanvas.bind(this)
  }

  drawCanvas({ctx, time}) {
    let link = 'https://shadowverse-portal.com/image/card/ja/C_' + this.state.cardID + '.png'
    const { width, height } = ctx.canvas

    let imageWidth = 536
    let imageHeight = 698

    let img = new Image()
    img.src = link
    ctx.clearRect(0, 0, width, height)

    ctx.save()
    ctx.translate(width/2, height/2)
    ctx.rotate(Math.PI / 2 * this.state.rotate)
    ctx.drawImage(img, -imageWidth*.24, -imageHeight*.24, imageWidth*.48, imageHeight*.48)
    ctx.restore()
  }

  render() {
    return (
      <Box style={{padding: '5px'}}>
        <Canvas draw={this.drawCanvas} width={200} height={70} realtime/>
      </Box>
    );
  }
}
