import styles from './ImageGallery.module.css';
import { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} onClick={onClick} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
