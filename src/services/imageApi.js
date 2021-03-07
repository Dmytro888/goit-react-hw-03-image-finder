import axios from 'axios';

const key = '20194224-dc6981f3af6cee6aa68ee0a6f';

const fetchImagesURL = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&key=${key}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );
};
export default fetchImagesURL;
