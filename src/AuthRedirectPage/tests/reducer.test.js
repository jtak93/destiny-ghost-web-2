
import { fromJS } from 'immutable';
import authRedirectPageReducer from '../reducer';

describe('authRedirectPageReducer', () => {
  it('returns the initial state', () => {
    expect(authRedirectPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
