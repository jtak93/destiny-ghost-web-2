import * as actions from './actions'
import * as types from './constants'
import reducer from './reducer'
import { fromJS } from 'immutable'

describe('counter actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT_COUNTER,
    }
    expect(actions.incrementCounter()).toEqual(expectedAction)
  }),
  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT_COUNTER,
    }
    expect(actions.decrementCounter()).toEqual(expectedAction)
  })
})


describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        counter: 0
      })
    )
  })

  it('should handle INCREMENT_COUNTER', () => {
    expect(
      reducer(fromJS({counter: 0}), {
        type: types.INCREMENT_COUNTER
      })
    ).toEqual(
      fromJS({
        counter: 1
      })
    )
  })

  it('should handle DECREMENT_COUNTER', () => {
    expect(
      reducer(fromJS({counter: 0}), {
        type: types.DECREMENT_COUNTER
      })
    ).toEqual(
      fromJS({
        counter: -1
      })
    )
  })
})
