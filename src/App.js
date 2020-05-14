import React from 'react';

import styles from './App.module.css';

import Header from './components/Header';
import FindJoke from './components/FindJoke';
import Favorite from './components/Favorite';
import ListJoke from './components/ListJoke';

class App extends React.Component {
  state = {
    toggle: true,
    isFavorite: false,
  };

  handleClick = () => {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
  };

  addToFavorite = () => {
    this.setState(prevState => {
      return { isFavorite: !prevState.isFavorite };
    });
  };

  render() {
    const { toggle, isFavorite } = this.state;
    return (
      <div className={styles.wraper}>
        <div className={styles.headerFavorite}>
          <div className={styles.componentsAndFavorite}>
            <Header handleClick={this.handleClick} toggle={toggle} />
            <FindJoke />
            <ListJoke
              addToFavorite={this.addToFavorite}
              isFavorite={isFavorite}
            />
          </div>
          <div className={styles.componentFavorite}>
            <Favorite handleClick={this.handleClick} />
          </div>
        </div>
        {!toggle && <Favorite handleClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;
