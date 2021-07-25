import styles from './ImageGallery.module.css';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    imageForModal: '',
  };

  handleClick = e => {
    this.handleChangeImageUrl(e);
    this.props.onClick();

    this.props.onChange(this.state.imageForModal);
  };

  handleChangeImageUrl = e => {
    this.setState({ imageForModal: e.target.srcset });
  };

  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <li
              className={styles.ImageGalleryItem}
              key={id}
              onClick={this.handleClick}
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
