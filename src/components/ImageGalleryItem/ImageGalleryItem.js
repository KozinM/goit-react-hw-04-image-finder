import s from './styles.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({imgSrc, largeImgSrc, openModal}) {
    return (
      <li className={s.galleryItem}>
        <img className={s.galleryImage}
          src={imgSrc}
          alt=""
          data-largesrc={largeImgSrc}
          onClick={()=>openModal(largeImgSrc)}
        />
      </li>
    );
  }

  ImageGalleryItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    largeImgSrc: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
  };