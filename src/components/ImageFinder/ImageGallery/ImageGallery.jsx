import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ queryData, onOpenModal }) => {
  return (
    <div>
      <ul className={styles.ImageGallery}>
        {queryData.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
