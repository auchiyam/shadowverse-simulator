import React, { Component } from 'react'

import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Box'

export default class ClassPortrait extends Component {
  render() {
    return (
      <Box justify={'center'} align={'center'} >
        <Image src="http://puu.sh/v11y4.png" size={'small'}/>
        <Heading tag={'h2'} style={{margin: '0px'}}>Shadowcraft</Heading>
      </Box>
    );
  }
}
