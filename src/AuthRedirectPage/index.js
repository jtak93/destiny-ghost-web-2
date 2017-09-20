/*
 *
 * AuthRedirectPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery'

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
          "client_id": 21342,
      }
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: encodeURIComponent(JSON.stringify(body)),
      }
      // axios.post('https://www.bungie.net/Platform/App/OAuth/token/', {}, axiosConfig)
      //   .then(resp => {
      //     localStorage.setItem('bungie-auth', resp.data)
      //   })
      $.ajax({
        type: "POST",
        url: 'https://www.bungie.net/Platform/App/OAuth/token/',
        data: body,
        headers: {
          "X-API-KEY": "fed6dda8d95343d88323bde6c5a922ed"
        },
        dataType: 'json'
      }).done(data => {
        console.log(data)
      });
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
