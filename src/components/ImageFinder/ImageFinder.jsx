import React, { Component } from 'react';
import fetchImagesURL from '../../services/imageApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from 'react-loader-spinner';
import Modal from './Modal';

import styles from './ImageFinder.module.css';

class ImageFinder extends Component {
  state = {
    queryData: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalImg: '',
  };

  componentDidUpdate (_prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    if (query === this.state.searchQuery) {
      return;
    }
    this.setState({
      searchQuery: query,
      page: 1,
      queryData: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };

    this.setState({ isLoading: true });

    setTimeout(
      () =>
        fetchImagesURL(options)
          .then(data => {
            this.setState(prevState => ({
              queryData: [...prevState.queryData, ...data.data.hits],
              page: prevState.page + 1,
            }));
            if (page > 1) {
              setTimeout(
                () =>
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                  }),
                400,
              );
            }
          })
          .catch(error => this.setState({ error }))
          .finally(this.setState({ isLoading: false })),
      1000,
    );
  };

  modalToggle = event => {
    if (event) {
      this.setState({ modalImg: event.currentTarget.dataset.set });
    }

    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  modalImgSet = img => {};

  render () {
    const { queryData, isLoading, showModal, modalImg } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && (
          <Loader
            className={styles.Loader}
            type='Oval'
            color='#3f51b5'
            height={280}
            width={280}
          />
        )}
        <ImageGallery queryData={queryData} onOpenModal={this.modalToggle} />
        {queryData.length > 0 && !isLoading && (
          <Button fetchImages={this.fetchImages} />
        )}
        {showModal && (
          <Modal onCloseModal={this.modalToggle}>
            <img src={modalImg} />
          </Modal>
        )}
      </div>
    );
  }
}

export default ImageFinder;
