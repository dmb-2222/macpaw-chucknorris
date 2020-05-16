import types from '../types';

const favorite = (state = [], { type, payload }) => {
  switch (type) {
    case types.FAVORITE_ADD:
      return state.every(el => el.id !== payload.id)
        ? [
            ...state,
            {
              ...payload,
              fav: !payload.fav,
            },
          ]
        : state.filter(item => item.id !== payload.id);
    case types.FAVORITE_DEL:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
export default favorite;
