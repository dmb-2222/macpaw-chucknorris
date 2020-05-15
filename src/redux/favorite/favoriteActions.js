import types from '../types';

const addFavorite = (items, id) => ({
  type: types.FAVORITE_ADD,
  payload: { items, id },
});

export default addFavorite;
