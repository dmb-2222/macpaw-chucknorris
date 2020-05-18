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
    typeOfSearch: '',
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value,
      name: e.target.name,
    });
  };

  handleChange = e => {
    const { search } = e.target.dataset;

    if (e.target.name === 'category') {
      this.setState({
        typeOfSearch: search,
        name: e.target.name,
      });
    }

    if (search === 'typeOfSearchCategory') {
      this.setState({
        isActiveCategory: true,
        isActiveSearch: false,
        typeOfSearch: search,
      });
    }
    if (search === 'HandleInput') {
      this.setState({
        isActiveSearch: true,
        isActiveCategory: false,
      });
    }
    if (search === 'typeOfSearchRandom') {
      this.setState({
        isActiveSearch: false,
        isActiveCategory: false,
        typeOfSearch: search,
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value, name, typeOfSearch } = this.state;
    const { findFromCategory, handleInput, findFromRandom, items } = this.props;
    if (name === 'category') {
      findFromCategory(typeOfSearch, items);
    }
    if (name === 'liveSearch') {
      handleInput(value, items);
    }
    if (typeOfSearch === 'typeOfSearchRandom') {
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
              data-search="typeOfSearchRandom"
              className={styles.findJoke__hidden}
              onChange={this.handleChange}
            />
            <span className={styles.findJoke__label}></span>Random
          </label>
          <label className={styles.findJoke__radio}>
            <input
              type="radio"
              name="typeOfSearch"
              data-search="typeOfSearchCategory"
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
                  data-search="animal"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>animal</span>
              </label>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  data-search="career"
                  onChange={this.handleChange}
                />
                <span className={styles.findJoke__category_text}>career</span>
              </label>
              <label className={styles.findJoke__radio_label}>
                <input
                  type="radio"
                  name="category"
                  className={styles.findJoke__category_hidden}
                  data-search="celebrity"
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
                  data-search="dev"
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
