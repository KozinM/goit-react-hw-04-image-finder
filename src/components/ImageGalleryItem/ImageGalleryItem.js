import s from './styles.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({id, imgSrc, largeImgSrc, openModal}) {
    return (
      <li className={s.galleryItem}>
        <img className={s.galleryImage}
          key={id}
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
    id: PropTypes.number.isRequired,
  };