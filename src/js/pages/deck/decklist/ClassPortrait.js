import React, { Component } from 'react'

import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'

export default class ClassPortrait extends Component {
  render() {
    return (
      <Box full={'horizontal'} justify={'center'} align={'center'}>
        <Image src="http://puu.sh/v11y4.png" size={'small'}/>
      </Box>
    );
  }
}