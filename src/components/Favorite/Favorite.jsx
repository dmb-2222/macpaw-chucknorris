import React from 'react';

import iconeHeartFull from '../../assets/icons/icon-heart-full.svg';
import iconeLetterFavorite from '../../assets/icons/icone-letter-favorite.svg';
import iconeFavActive from '../../assets/icons/icone-fav-active.svg';
import styles from './Favorite.module.css';

const Favorite = ({ handleClick }) => (
  <>
    <div
      className={styles.favorite__overlay}
      onClick={handleClick}
      data-modal="modal"
      name="modal"
    ></div>

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
      <div className={styles.favorite__container}>
        <button className={styles.favorite__btn_heart}>
          <img src={iconeHeartFull} alt="icone-heart-empty" />
        </button>
        <div className={styles.favorite__box_letter}>
          <img
            src={iconeLetterFavorite}
            alt="icon-letter-joke"
            className={styles.favorite__iconLetter}
          />
          <div>
            <span className={styles.favorite__ID}>ID: </span>
            <a href="/#" className={styles.favorite__link}>
              XNaAxUduSw6zANDaIEab7A
            </a>
            <p className={styles.favorite__joke_text}>
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </p>
            <p className={styles.favorite__footerLetter}>
              Last update: 1923 hours ago
            </p>
          </div>
        </div>
      </div>

      <div className={styles.favorite__container}>
        <button className={styles.favorite__btn_heart}>
          <img src={iconeHeartFull} alt="icone-heart-empty" />
        </button>
        <div className={styles.favorite__box_letter}>
          <img
            src={iconeLetterFavorite}
            alt="icon-letter-joke"
            className={styles.favorite__iconLetter}
          />
          <div>
            <span className={styles.favorite__ID}>ID: </span>
            <a href="/#" className={styles.favorite__link}>
              XNaAxUduSw6zANDaIEab7A
            </a>
            <p className={styles.favorite__joke_text}>
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </p>
            <p className={styles.favorite__footerLetter}>
              Last update: 1923 hours ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Favorite;
