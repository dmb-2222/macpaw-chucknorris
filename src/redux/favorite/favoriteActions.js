import types from '../types';

const addFavorite = value => ({
  type: types.FAVORITE_ADD,
  payload: value,
});

export default addFavorite;
