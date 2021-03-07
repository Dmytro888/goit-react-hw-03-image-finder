import React from 'react';
import styles from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
