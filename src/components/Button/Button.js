import s from './styles.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore, isLoading }) => {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={onLoadMore}
      disabled={isLoading}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
