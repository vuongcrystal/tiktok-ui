import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(
  ({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
      setFallBack(customFallBack);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};


export default Image;
