import { Component } from 'react';
import s from './styles.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {

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
  };