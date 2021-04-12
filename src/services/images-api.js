import axios from "axios";

const fetchImages = ({ searchQuery = "", page = 1 }) => {
  const KEY = "20328481-fd22f6b33af33c123ae9427ab";
  const URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(URL).then((response) => response.data.hits);
};

export default { fetchImages };
