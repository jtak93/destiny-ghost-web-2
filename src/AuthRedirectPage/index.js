/*
 *
 * AuthRedirectPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { api } from '../utils/api';

export class AuthRedirectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // var urlParams = URLSearchParams.getAll()
    var paramsString = window.location.search
    var urlParams = new URLSearchParams(paramsString)
    var code = urlParams.get('code');

    if (code) {
      var body = {
          "code": code,
          "grant_type": 'authorization_code',
          "client_id": 21342
      }
      console.log('body:', body)
      api.post('/App/OAuth/token/', body, {data: body, withCredentials: true})
        .then(resp => {
          localStorage.setItem('bungie-auth', resp.data)
        })
    }
  }

  render() {
    return (
      <div>
        Auth Redirect
      </div>
    );
  }
}

AuthRedirectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AuthRedirectPage);
