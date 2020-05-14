import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/Header';
import FindJoke from './components/FindJoke';
import Favorite from './components/Favorite';
import ListJoke from './components/ListJoke';
import Loader from './components/Loader';

import styles from './App.module.css';

class App extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

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
    const { isLoading } = this.props;
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
        {isLoading && <Loader />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.jokes.loading,
});
export default connect(mapStateToProps)(App);
