import React, { Component } from 'react'

import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'

import ClassPortrait from './decklist/ClassPortrait'
import Stats from './decklist/Stats'
import DeckCards from './decklist/DeckCards'
import DeckLogo from './decklist/DeckLogo'


export default class DeckList extends Component {
  render() {
    return (
      <Sidebar size={'medium'} colorIndex={'neutral-1'}>
        <Header>
          <Title full={'horizontal'}>
            <Box>
              <Heading tag={'h2'} style={{paddingTop: '5px'}}>Deck Name</Heading>
            </Box>
            <Box full={'horizontal'} justify={'end'} align={'end'}>
              <DeckLogo color={'#FFFFFF'} />
            </Box>
          </Title>
        </Header>

        <ClassPortrait />

        <Stats />
        <DeckCards />
        <Footer>
        </Footer>
      </Sidebar>
    );
  }
}
