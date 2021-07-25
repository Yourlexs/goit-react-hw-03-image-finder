import { Component } from 'react';

import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = largeImageURL => {
    const { onClick } = this.props;
    onClick(largeImageURL);
  };

  render() {
    const { image } = this.props;
    return (
      <li
        key={image.id}
        className={styles.ImageGalleryItem}
        onClick={() => this.handleClick(image.largeImageURL)}
      >
        <img
          src={image.webformatURL}
          srcSet={image.largeImageURL}
          alt=""
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
