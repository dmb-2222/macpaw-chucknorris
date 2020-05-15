import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// store
import getJoke from '../../redux/joke/jokeSelectors';
import addFavorite from '../../redux/favorite/favoriteActions';
import { jokeAddFlagIsFavorite } from '../../redux/joke/jokeActions';
//styles
import styles from './ListJoke.module.css';
// component
import iconeHeartEmpty from '../../assets/icons/icon-heart-empty.svg';
import iconeLetter from '../../assets/icons/icon-letter-joke.svg';
import iconeHeartFull from '../../assets/icons/icon-heart-full.svg';

const ListJoke = ({ items, addToFav, addFlagIsFav }) => {
  const wrapFanction = (items, itemId) => {
    addToFav(items, itemId);
    addFlagIsFav(items, itemId);
  };
  return (
    <>
      {items.length !== 0 && (
        <ul className={styles.listJoke__container}>
          {items.map(item => (
            <li key={item.id} className={styles.listJoke__cartOfJoke}>
              <button
                className={styles.listJoke__btn_heart}
                onClick={() => wrapFanction(items, item.id)}
              >
                {item.fav ? (
                  <img src={iconeHeartFull} alt="icon-heart-full" />
                ) : (
                  <img src={iconeHeartEmpty} alt="icone-heart-empty" />
                )}
              </button>
              <div className={styles.listJoke__box_letter}>
                <img
                  src={iconeLetter}
                  alt="icon-letter-joke"
                  className={styles.listJoke__iconLetter}
                />
                <div>
                  <span className={styles.listJoke__ID}>ID: </span>
                  <a href={item.url} className={styles.listJoke__link}>
                    {item.id}
                  </a>
                  <p>{item.value}</p>
                  <p className={styles.listJoke__footerLetter}>
                    Last update: {item.updated_at}
                  </p>
                  {item.categories.length !== 0 && (
                    <p className={styles.listJoke__footerLetter_category}>
                      {item.categories[0]}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  items: getJoke(state),
});
const mapDispatchToProps = dispatch => ({
  addToFav: (items, id) => dispatch(addFavorite(items, id)),
  addFlagIsFav: (items, id) => dispatch(jokeAddFlagIsFavorite(items, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListJoke);

ListJoke.propTypes = {
  items: PropTypes.array,
};
