import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActionCreators from './actions'

const Counter = props => (
  <div>
    <h1>Counter</h1>
    <h2>{props.counter}</h2>
    <button onClick={() => props.incrementCounter()}>Increment Counter</button>
    <button onClick={() => props.decrementCounter()}>Decrement Counter</button>
  </div>
)

const mapStateToProps = state => {
  return {
    counter: state.counter.get('counter')
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(CounterActionCreators, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
