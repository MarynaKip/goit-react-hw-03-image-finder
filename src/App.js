import React, { Component } from "react";
import imagesApi from "./services/images-api";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 20328481-fd22f6b33af33c123ae9427ab";

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    images: [],
    showModal: false,
    searchQuery: "",
    page: 1,
    isLoading: false,
    error: null,
    modalImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [], error: null });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onOpenModal = (largeURL) => {
    this.setState({ modalImage: largeURL });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, error, showModal, modalImage } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal modalURL={modalImage} onClose={this.toggleModal} />
        )}
        {error && <p>Oops!</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        {/* <ImageGallery id={id}
          images={images}
          onOpenModal={this.toggleModal} /> */}
        <ImageGallery>
          {images.map((image) => (
            <ImageGalleryItem
              id={image.id}
              imageURL={image.webformatURL}
              modalURL={image.largeImageURL}
              onClick={this.onOpenModal}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
