/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.bungieLogin = this.bungieLogin.bind(this)
  }
  componentDidMount() {
    var paramsString = window.location.search
    var urlParams = new URLSearchParams(paramsString)
    var code = urlParams.get('code');
    if (code) {
      this.props.push(`/auth?code=${code}`)
    }
  }

  bungieLogin() {
    window.location = 'https://www.bungie.net/en/OAuth/Authorize?client_id=21342&response_type=code'
  }
  render() {
    return (
      <div>
        <Container textAlign='center' id='home-container'>
          <h1>Meet your personal Ghost!</h1>
          <Button primary inverted onClick={this.bungieLogin} id='get-started'>Get Started</Button>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    push: (url) => dispatch(push(url))
  }
}

export default connect(null, mapDispatchToProps)(HomePage)
