import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// SVG
import iconeHeartEmpty from '../../assets/icons/icon-heart-empty.svg';
import iconeLetter from '../../assets/icons/icon-letter-joke.svg';
import iconeHeartFull from '../../assets/icons/icon-heart-full.svg';
// styles

import styles from './Items.module.css';
const Items = ({
  itemElement,
  addToFav = false,
  addFlagIsFav = false,
  handleDelFav = false,
  isFavorite,
}) => {
  const [isFlipped, changeFlipped] = useState(false);
  // How about HOOK?
  const { id, value, updated_at, categories, url, fav } = itemElement;

  const wrapFanction = (itemElement, itemId) => {
    addToFav && addToFav(itemElement);
    addFlagIsFav && addFlagIsFav(itemId);
    handleDelFav && handleDelFav(itemElement, itemId);
    changeFlipped(true);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <button
          className={styles.item__btn_heart}
          onClick={() => wrapFanction(itemElement, id)}
        >
          {fav ? (
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
            <a href={url} className={styles.listJoke__link}>
              {id}
            </a>
            <p>{value}</p>
            <p className={styles.listJoke__footerLetter}>
              Last update: {updated_at}
            </p>
            {categories.length !== 0 && (
              <p
                className={
                  isFavorite === 'fav'
                    ? styles.favorite
                    : styles.listJoke__footerLetter_category
                }
              >
                {categories[0]}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* back */}
      <div>
        <button
          className={styles.item__btn_heart}
          onClick={() => wrapFanction(itemElement, id)}
        >
          {fav ? (
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
            <a href={url} className={styles.listJoke__link}>
              {id}
            </a>
            <p>{value}</p>
            <p className={styles.listJoke__footerLetter}>
              Last update: {updated_at}
            </p>
            {categories.length !== 0 && (
              <p
                className={
                  isFavorite === 'fav'
                    ? styles.favorite
                    : styles.listJoke__footerLetter_category
                }
              >
                {categories[0]}
              </p>
            )}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};
export default Items;
