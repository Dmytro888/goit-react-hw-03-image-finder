import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ fetchImages }) => {
  return (
    <div>
      <button type='button' className={styles.Button} onClick={fetchImages}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};

export default Button;
