import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount () {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render () {
    return createPortal(
      <div>
        <div
          className={styles.modalBackdrop}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.modalContainer}>{this.props.children}</div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
