import React, { Component } from 'react'

import Sidebar from 'grommet/components/Sidebar'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'

import ClassPortrait from './decklist/ClassPortrait'
import Stats from './decklist/Stats'
import DeckCards from './decklist/DeckCards'
import DeckLogo from './decklist/DeckLogo'


export default class DeckList extends Component {
  render() {
    let tempdeck = [
      {id: '101514010', amount: 2},
      {id: '101021010', amount: 3},
      {id: '102021020', amount: 2},
      {id: '100511010', amount: 2},
      {id: '101511020', amount: 2},
      {id: '103521030', amount: 2},
      {id: '103021040', amount: 2},
      {id: '102511060', amount: 2},
      {id: '103511050', amount: 2},
      {id: '101514030', amount: 2},
      {id: '101534020', amount: 2},
      {id: '103534010', amount: 2},
      {id: '101534030', amount: 2},
      {id: '103521040', amount: 2},
      {id: '101531050', amount: 2},
      {id: '103541010', amount: 2},
    ]
    return (
      <Sidebar size={'large'} colorIndex={'neutral-1'}>
        <Article>
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

          <Section pad={'none'}>
            <ClassPortrait />
          </Section>

          <Section pad={'none'}>
            <Stats costCount={[2, 13, 13, 0, 0, 3, 3, 6, 0, 0, 0]} total={{followers: 20, spells: 10, amulets: 1, total: 31}}/>
          </Section>

          <Section>
            <DeckCards cards={tempdeck}/>
          </Section>

          <Footer>
          </Footer>
        </Article>
      </Sidebar>
    );
  }
}
