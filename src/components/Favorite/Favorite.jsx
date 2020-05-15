import React from 'react';
import { connect } from 'react-redux';

// Store
import getFav from '../../redux/favorite/favoriteSelectors';
//
import iconeHeartFull from '../../assets/icons/icon-heart-full.svg';
import iconeLetterFavorite from '../../assets/icons/icone-letter-favorite.svg';
import iconeFavActive from '../../assets/icons/icone-fav-active.svg';
import styles from './Favorite.module.css';

const Favorite = ({ handleClick, itemsFav }) => {
  console.log(itemsFav);
  return (
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
              <li key={item.id}>
                <button className={styles.favorite__btn_heart}>
                  <img src={iconeHeartFull} alt="icon-heart-full.svg" />
                </button>
                <div className={styles.favorite__box_letter}>
                  <img
                    src={iconeLetterFavorite}
                    alt="icon-letter-joke"
                    className={styles.favorite__iconLetter}
                  />
                  <div>
                    <span className={styles.favorite__ID}>ID: </span>
                    <a href={item.url} className={styles.favorite__link}>
                      {item.id}
                    </a>
                    <p className={styles.favorite__joke_text}>{item.value}</p>
                    <p className={styles.favorite__footerLetter}>
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
      </div>
      <div
        className={styles.favorite__overlay}
        data-modal="modal"
        name="modal"
      ></div>
    </>
  );
};

const mapStateToProps = state => ({
  itemsFav: getFav(state),
});
export default connect(mapStateToProps)(Favorite);
