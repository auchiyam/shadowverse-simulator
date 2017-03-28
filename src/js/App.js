import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import WelcomePage from './pages/WelcomePage';
import DeckPage from './pages/DeckPage';

export default class BasicApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageLoaded: 0
    }

    this.changePage = this.changePage.bind(this)
  }

  changePage(page) {
    this.setState({
      pageLoaded: page
    })
  }

  render() {
    let page;
    if (this.state.pageLoaded == 0) {
      page = (<WelcomePage onClickStart={this.changePage}/>)
    }

    if (this.state.pageLoaded == 1) {
      page = (<DeckPage />)
    }

    return (
      <App>
        {page}
      </App>
    );
  }
}
