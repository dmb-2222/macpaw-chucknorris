import types from '../types';

const favorite = (state = [], { type, payload }) => {
  switch (type) {
    case types.FAVORITE_ADD:
      return [
        payload.items.find(item =>
          item.id === payload.id ? { ...item, fav: !item.fav } : item,
        ),
      ];
    case types.FAVORITE_DEL:
      return state.filter(favoriteJoke => favoriteJoke.id !== payload);
    default:
      return state;
  }
};
export default favorite;

// this.setState(prevState => ({
//   favoriteItems: prevState.favoriteItems.map(item =>
//     item.id === id ? { ...items, fav: !item.fav } : items,
//   ),
// }));
