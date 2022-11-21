import { useEffect } from 'react';
import s from './styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({onModalClose, largeImg}) => {
  
  const onKeyDownHandle = event => {
    if (event.code === 'Escape') 
    {onModalClose();}
  };

  const onBackdropClickHandle = event => {
    if (event.target === event.currentTarget)
     {onModalClose();}
  };

  useEffect(()=>{
    window.addEventListener('keydown', onKeyDownHandle);
    return () => {window.removeEventListener('keydown', onKeyDownHandle);}
  },[]);
  return (
    <div className={s.Overlay} onClick={onBackdropClickHandle}>
    <div className={s.Modal}>
      <img src={largeImg}  alt="" />
    </div>
  </div>
  )
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};

/* export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDownHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDownHandle);
  }

  onKeyDownHandle = event => {
    if (event.code === 'Escape') 
    {this.props.onModalClose();}
  };

  onBackdropClickHandle = event => {
    if (event.target === event.currentTarget)
     {this.props.onModalClose();}
  };

  render() {
    const { onBackdropClickHandle } = this;
    const { largeImg } = this.props;
    return (
      <div className={s.Overlay} onClick={onBackdropClickHandle}>
        <div className={s.Modal}>
          <img src={largeImg}  alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  }; */