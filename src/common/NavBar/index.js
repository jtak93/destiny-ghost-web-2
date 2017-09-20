/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button, Menu } from 'semantic-ui-react'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleItemClick = (url) => this.props.push(url)

  handleBungieLogin = (e) => {
    window.location = 'https://www.bungie.net/en/OAuth/Authorize?client_id=21342&response_type=code'
  }

  render() {
    return (
      <Menu size='massive' inverted>
        <Menu.Item name='Destiny Ghost' onClick={this.handleItemClick.bind(null, '/')} />
        <Menu.Item name='about' onClick={this.handleItemClick.bind(null, '/about')} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary inverted id='login-button' onClick={this.handleBungieLogin}>Login With Bungie</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  push: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    push: (url) => dispatch(push(url)),
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
