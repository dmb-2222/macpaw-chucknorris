import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// store
import getJoke from '../../redux/joke/jokeSelectors';
import { addFavorite } from '../../redux/favorite/favoriteActions';
import { jokeAddFlagIsFavorite } from '../../redux/joke/jokeActions';
//styles
import styles from './ListJoke.module.css';
// component
import Items from '../Items';

const ListJoke = ({ items, addToFav, addFlagIsFav }) => {
  return (
    <>
      <ul className={styles.listJoke__container}>
        {items.map(item => (
          <li key={item.id} className={styles.listJoke__cartOfJoke}>
            <Items
              itemElement={item}
              addToFav={addToFav}
              addFlagIsFav={addFlagIsFav}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = state => ({
  items: getJoke(state),
});
const mapDispatchToProps = dispatch => ({
  addToFav: (item) => dispatch(addFavorite(item)),
  addFlagIsFav: id => dispatch(jokeAddFlagIsFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListJoke);

ListJoke.propTypes = {
  items: PropTypes.array,
};
