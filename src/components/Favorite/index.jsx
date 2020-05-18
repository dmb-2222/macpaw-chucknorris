// export { default } from './Favorite';

import { connect } from 'react-redux';

// Store
import getFav from '../../redux/favorite/favoriteSelectors';
import { handleDelete } from '../../redux/favorite/favoriteActions';
import { jokeAddFlagIsFavorite } from '../../redux/joke/jokeActions';
//
import Favorite from './Favorite'

const mapDispatchToProps = dispatch => ({
  delFav: (itemsFav, id) => dispatch(handleDelete(itemsFav, id)),
  addFlagIsFav: id => dispatch(jokeAddFlagIsFavorite(id)),
});
const mapStateToProps = state => ({
  itemsFav: getFav(state),
});
export default connect(mapStateToProps,mapDispatchToProps)(Favorite);