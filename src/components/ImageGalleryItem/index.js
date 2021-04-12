import "./ImageGalleryItem.scss";
//import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageURL, onOpenModal }) => (
  <li className="ImageGalleryItem">
    <img
      src={imageURL}
      alt=""
      className="ImageGalleryItem-image"
      onClick={onOpenModal}
    />
  </li>
);

//ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
