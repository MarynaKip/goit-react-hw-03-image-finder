//import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.scss";

// import styled from "styled-components";

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <li key={image.id}>
        <ImageGalleryItem
          imageURL={image.webformatURL}
          onOpenModal={onOpenModal}
        />
      </li>
    ))}
  </ul>
);

//ImageGallery.propTypes = {};

export default ImageGallery;
