import types from '../types';

const favorite = (state = [], { type, payload }) => {
  switch (type) {
    case types.FAVORITE_ADD:
      return [...payload];
    case types.FAVORITE_DEL:
      return state.filter(favoriteJoke => favoriteJoke.id !== payload);
    default:
      return state;
  }
};
export default favorite;
