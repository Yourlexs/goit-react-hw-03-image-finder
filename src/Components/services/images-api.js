import axios from 'axios';

const API_KEY = '21843177-dc493b9de0e38d6cc05d61e8e';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
