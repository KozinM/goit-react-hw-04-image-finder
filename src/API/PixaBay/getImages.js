import axios from 'axios'
import PropTypes from 'prop-types';

export { getImages }

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '30164013-1853a266bd8cbfed0fcba1603'
//const perPage = 40;

async function getImages(query, pageNumber, resultsPerPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=${resultsPerPage}`,
  )
  const images = response.data.hits.map(img => {
    const {id, largeImageURL, webformatURL} = img;
    return {
      id,
      largeImageURL,
      webformatURL
    }})
return images;
}


getImages.propTypes = {
    query: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    resultsPerPage: PropTypes.number.isRequired,
  };