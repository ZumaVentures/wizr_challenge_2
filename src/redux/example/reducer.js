import { EXAMPLE_COUNTER_INCREMENT } from './constants';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case EXAMPLE_COUNTER_INCREMENT: {
      const { count } = initialState;
      return {
        count: count + 1,
      };
    }
    default:
      return state;
  }
}
