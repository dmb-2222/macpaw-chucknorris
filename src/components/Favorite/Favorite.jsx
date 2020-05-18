import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Store
import getFav from '../../redux/favorite/favoriteSelectors';
import { handleDelete } from '../../redux/favorite/favoriteActions';
import { jokeAddFlagIsFavorite } from '../../redux/joke/jokeActions';
//SVG
import iconeFavActive from '../../assets/icons/icone-fav-active.svg';
// styles
import styles from './Favorite.module.css';
//components
import Items from '../Items';

const Favorite = ({ handleClick, itemsFav, delFav, addFlagIsFav }) => (
    <>
      <div className={styles.favorite__modul}>
        <nav>
          <button onClick={handleClick}>
            <img
              src={iconeFavActive}
              alt="icone-fav-active"
              className={styles.favorite__iconFavActive}
            />
          </button>
          <p className={styles.favorite__FavoriteText}>Favorite</p>
        </nav>
        {itemsFav.length !== 0 && (
          <ul className={styles.favorite__container}>
            {itemsFav.map(item => (
              <li key={item.id} className={styles.favorite__list}>
                <Items
                  itemElement={item}
                  handleDelFav={delFav}
                  isSavoriteComponent={true}
                  addFlagIsFav={addFlagIsFav}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={styles.favorite__overlay}
        data-modal="modal"
        name="modal"
      ></div>
    </>
  );
const mapDispatchToProps = dispatch => ({
  delFav: (itemsFav, id) => dispatch(handleDelete(itemsFav, id)),
  addFlagIsFav: id => dispatch(jokeAddFlagIsFavorite(id)),
});
const mapStateToProps = state => ({
  itemsFav: getFav(state),
});

Favorite.propTypes = {
  handleClick: PropTypes.func.isRequired,
  itemsFav: PropTypes.array.isRequired,
  delFav: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
