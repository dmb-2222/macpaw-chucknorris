import React from 'react';
import PropTypes from 'prop-types';

//styles
import styles from './FormFindJoke.module.css';

class FormFindJoke extends React.Component {
  static propTypes = {
    findFromCategory: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    findFromRandom: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };
  state = {
    isActiveCategory: false,
    isActiveSearch: false,
    value: '',
    name: '',
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value,
      name: e.target.name,
    });
  };

  handleChange = e => {
    if (e.target.name === 'category') {
      this.setState({
        value: e.target.value,
        name: e.target.name,
      });
    }

    if (e.target.value === 'typeOfSearchCategory') {
      this.setState({
        isActiveCategory: true,
        isActiveSearch: false,
        value: e.target.value,
      });
    }
    if (e.target.dataset.search === 'HandleInput') {
      this.setState({
        isActiveSearch: true,
        isActiveCategory: false,
      });
    }
    if (e.target.value === 'typeOfSearchRandom') {
      this.setState({
        isActiveSearch: false,
        isActiveCategory: false,
        value: e.target.value,
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value, name } = this.state;
    const { findFromCategory, handleInput, findFromRandom, items } = this.props;
    if (name === 'category') {
      findFromCategory(value, items);
    }
    if (name === 'liveSearch') {
      handleInput(value, items);
    }
    if (value === 'typeOfSearchRandom') {
      findFromRandom(items);
    }
    this.setState({ value: '' });
  };
  render() {
    const { isActiveCategory, isActiveSearch, value } = this.state;
    return (
      <div className={styles.findJoke}>
        <p className={styles.findJoke__textMain}>Hey!</p>
        <p className={styles.findJoke__textTryFind}>
          Let’s try to find a joke for you:
        </p>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.findJoke__radio}>
            <input
              type="radio"
              name="typeOfSearch"
              value="typeOfSearchRandom"
              className={styles.findJoke__hidden}
              onChange={this.handleChange}
            />
            <span className={styles.findJoke__label}></span>Random
          </label>
          <label className={styles.findJoke__radio}>
            <input
              type="radio"
              name="typeOfSearch"
              value="typeOfSearchCategory"
              className={styles.findJoke__hidden}
              onChange={this.handleChange}
            />
            <span className={styles.findJoke__label}></span>From caterogies
          </label>
          {isActiveCategory && (
            <div className={styles.findJoke__radio_category}>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  value="animal"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>animal</span>
              </label>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  value="career"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>career</span>
              </label>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  value="celebrity"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>
                  celebrity
                </span>
              </label>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  value="dev"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>dev</span>
              </label>
            </div>
          )}

          <label className={styles.findJoke__radio}>
            <input
              type="radio"
              name="typeOfSearch"
              data-search="HandleInput"
              className={styles.findJoke__hidden}
              onChange={this.handleChange}
            />
            <span className={styles.findJoke__label}></span>Search
          </label>
          {isActiveSearch && (
            <input
              type="text"
              name="liveSearch"
              placeholder="Free text search..."
              onChange={this.handleChangeInput}
              className={styles.searchConsole}
              value={value}
            />
          )}
          <button className={styles.findJoke__btn_getJoke}>Get a joke</button>
        </form>
      </div>
    );
  }
}
export default FormFindJoke;
