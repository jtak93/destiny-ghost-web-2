import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../Counter'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
        <Counter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
