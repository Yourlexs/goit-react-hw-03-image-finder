import { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  componentDidMount() {
    const { totalImages } = this.props;

    if (totalImages > 10) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={onClick} className={styles.button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
