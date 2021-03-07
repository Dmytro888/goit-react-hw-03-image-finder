import React from 'react';
import styles from './Button.module.css';

const Button = ({ fetchImages }) => {
  return (
    <div>
      <button type='button' className={styles.Button} onClick={fetchImages}>
        Load more
      </button>
    </div>
  );
};

export default Button;
