import styles from './ImageGallery.module.css';
import { Component } from 'react';

class ImageGallery extends Component {
  handleClick = largeImageURL => {
    const { onClick } = this.props;
    onClick(largeImageURL);
  };

  render() {
    const { images } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <li
              className={styles.ImageGalleryItem}
              key={id}
              onClick={() => this.handleClick(largeImageURL)}
            >
              <img
                src={webformatURL}
                srcSet={largeImageURL}
                alt=""
                className={styles.ImageGalleryItemImage}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
