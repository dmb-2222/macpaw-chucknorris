import React from 'react';
import PropTypes from 'prop-types';
import { ReactHeight } from 'react-height';

//styles
import styles from './ListJoke.module.css';
// component
import Items from '../Items';


const ListJoke = ({ items, addToFav, addFlagIsFav, getHeight }) => {


  return (
    <>
      <ul className={styles.listJoke__container}>
        <ReactHeight onHeightReady={height => getHeight(height)}>
          {items.map(item => (
            <li key={item.id} className={styles.listJoke__cartOfJoke}>
              <Items
                itemElement={item}
                addToFav={addToFav}
                addFlagIsFav={addFlagIsFav}
              />
            </li>
          ))}
        </ReactHeight>
      </ul>
    </>
  );
};

export default ListJoke;

ListJoke.propTypes = {
  items: PropTypes.array,
};
