import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import iconFavNoActive from '../../assets/icons/iconFavNoActive.svg';

const Header = ({ handleClick }) => (
  <div className={styles.header}>
    <p>MSI 2020</p>
    <nav>
      <button onClick={handleClick}>
        <img
          src={iconFavNoActive}
          alt="icon-favorite-close"
          className={styles.nav_iconFavNoActive}
        />
      </button>
      <p className={styles.header__FavoriteText}>Favorite</p>
    </nav>
  </div>
);
export default Header;

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
