import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onOpenModal, largeImageURL }) => {
  return (
    <div>
      <li
        className={styles.ImageGalleryItem}
        onClick={onOpenModal}
        data-set={largeImageURL}
      >
        <img className={styles.ImageGalleryItemImage} src={webformatURL} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
