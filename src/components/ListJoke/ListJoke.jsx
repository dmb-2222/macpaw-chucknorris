import React from 'react';
import PropTypes from 'prop-types';

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

export default ListJoke;

ListJoke.propTypes = {
  items: PropTypes.array,
};
