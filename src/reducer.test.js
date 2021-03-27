import { selectChoice, selectResult } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      selects: [],
      result: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('selectChoice', () => {
    it('changes selects', () => {
      const initialState = {
        selects: [],
      };

      const choiceId = 1;

      const state = reducer(initialState, selectChoice(choiceId));

      expect(state.selects).toHaveLength(1);
    });
  });

  describe('selectResult', () => {
    it('selects result', () => {
      const initialState = {
        result: null,
      };

      const state = reducer(initialState, selectResult(1));

      expect(state.result.id).toEqual(1);
    });
  });
});