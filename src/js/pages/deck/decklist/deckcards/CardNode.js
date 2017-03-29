import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import { Stage, Layer, Image } from 'react-konva'

export default class CardNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardID: this.props.cardID,
      amount: this.props.amount,
      key: this.props.num,
      rotate: 0,
      randomized: false
    }

    if (this.state.key % 2 == 0) {
      this.state.rotate = 1
    }
    else {
      this.state.rotate = -1
    }
  }

  render() {
    let url = 'https://shadowverse-portal.com/image/card/ja/C_' + this.state.cardID + '.png'
    var img = new window.Image()
    img.src = url

    let centerx, centery
    var imageHeight = 698, imageWidth = 536
    var width = 220, height = 80
    var scalar1 = .55
    var scalar2 = .5
    var nImgHeight = 430, nImgWidth = 150
    var rImgHeight = nImgHeight * scalar2, rImgWidth = nImgWidth * scalar2

    if (this.state.rotate == 1) {
      centery = (rImgWidth - height) / -2
      centerx = width + (rImgHeight - width) / 2

      console.log(centery)
    }
    else {
      centerx = (rImgWidth - height) / -2
      centery = height + (rImgWidth - height) / 2
    }

    return (
      <Box style={{padding: '5px'}} direction={'row'} reverse={this.state.rotate == -1}>
        <Stage width={width} height={height}>
          <Layer>
            <Image
              image={img}
              x={centerx}
              y={centery}
              cropX={imageWidth - nImgWidth - (imageWidth / 2 - nImgWidth / 2)}
              cropY={imageHeight - nImgHeight - (imageHeight / 2 - nImgHeight / 2)}
              cropWidth={nImgWidth}
              cropHeight={nImgHeight}
              width={rImgWidth}
              height={rImgHeight}
              rotation={90 * this.state.rotate}
              />
          </Layer>
        </Stage>
      </Box>
    );
  }
}
