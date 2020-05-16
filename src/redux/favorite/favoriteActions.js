import types from '../types';

export const addFavorite = item => ({
  type: types.FAVORITE_ADD,
  payload: item,
});

export const handleDelete = (itemsFav, id) => ({
  type: types.FAVORITE_DEL,
  payload: { itemsFav, id },
});
