import { Component } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';

import imagesApi from './Components/services/images-api';

class App extends Component {
  state = {
    images: [],
    imageForModal: '',
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  onChangeModalImg = img => {
    this.setState({
      imageForModal: img,
    });
    this.toggleModal();
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, imageForModal, isLoading, error, showModal } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    const totalImages = images.length;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onClick={this.onChangeModalImg} />
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {error && <p>Oops...</p>}
        {shouldRenderLoadMoreButton && (
          <Button onClick={this.fetchImages} totalImages={totalImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} image={imageForModal} />
        )}
      </>
    );
  }
}

export default App;
