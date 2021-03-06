import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Header from '../Header';
import Favorite from '../Favorite';
import FormFindJoke from '../FormFindJoke';
import ListJoke from '../ListJoke';
import Loader from '../Loader';

import styles from './App.module.css';

class App extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    toggle: true,
    height: '',
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle,
      };
    });
  };

  getHeight = heightListGoke => {
    this.setState({
      height: Number(heightListGoke) + 600,
    });
  };

  render() {
    const { toggle, height } = this.state;
    const { isLoading, items } = this.props;
    return (
      <div className={styles.wraper}>
        <div className={styles.headerFavorite}>
          <div className={styles.componentsAndFavorite}>
            <Header handleClick={this.handleClick} toggle={toggle} />
            <FormFindJoke />
            {items.length !== 0 && (
              <ListJoke
                addToFavorite={this.addToFavorite}
                getHeight={this.getHeight}
              />
            )}
          </div>
          <div className={styles.componentFavorite}>
            <Favorite handleClick={this.handleClick} />
          </div>
        </div>
        {!toggle && <Favorite handleClick={this.handleClick} height={height} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.jokes.loading,
  items: state.jokes.dataJokes,
});
export default connect(mapStateToProps)(App);
