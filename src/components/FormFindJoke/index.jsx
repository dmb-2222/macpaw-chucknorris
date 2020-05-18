import { connect } from 'react-redux';

//store
import {
  getRandomJokeDataFetch,
  getJokeFromCategoryFetch,
  getJokeFromSearchInputFetch,
} from '../../redux/joke/jokeOperations';
import getFav from '../../redux/favorite/favoriteSelectors';
// component
import FormFindJoke from './FormFindFindJoke';

const mapStateToProps = state => ({
  items: getFav(state),
});

const mapDispatchToProps = dispatch => ({
  findFromRandom: items => dispatch(getRandomJokeDataFetch(items)),
  findFromCategory: (value, items) =>
    dispatch(getJokeFromCategoryFetch(value, items)),
  handleInput: (value, items) =>
    dispatch(getJokeFromSearchInputFetch(value, items)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormFindJoke);
