import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searcbar extends Component {
  state = {
    inputValue: '',
  };

  key = '20194224-dc6981f3af6cee6aa68ee0a6f';

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: '' });
  };
  render () {
    const { inputValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type='submit' className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            name='inputValue'
            type='text'
            placeholder='Search images and photos'
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searcbar;
