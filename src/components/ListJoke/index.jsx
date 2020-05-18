import { connect } from 'react-redux';

//store
import getJoke from '../../redux/joke/jokeSelectors';
import { addFavorite } from '../../redux/favorite/favoriteActions';
import { jokeAddFlagIsFavorite } from '../../redux/joke/jokeActions';
// component
import ListJoke from './ListJoke'

const mapStateToProps = state => ({
    items: getJoke(state),
  });
  const mapDispatchToProps = dispatch => ({
    addToFav: (item) => dispatch(addFavorite(item)),
    addFlagIsFav: id => dispatch(jokeAddFlagIsFavorite(id)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListJoke);