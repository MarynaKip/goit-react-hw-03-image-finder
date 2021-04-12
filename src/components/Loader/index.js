import Loader from "react-loader-spinner";
//import PropTypes from "prop-types";

const Spinner = () => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
);

//Loader.propTypes = {};

export default Spinner;
