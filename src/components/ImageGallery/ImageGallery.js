import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onModalOpen }) => {
    return (
      <ul className={s.Gallery}>
        {images.map(({ id, webformatURL,largeImageURL }, index) => (
          <ImageGalleryItem
            key={id}
            imgSrc={webformatURL}
            largeImgSrc={largeImageURL}
            openModal={onModalOpen}
          />
        ))}
      </ul>
    );
  }
  
  ImageGallery.propTypes = {
    onModalOpen: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default ImageGallery;