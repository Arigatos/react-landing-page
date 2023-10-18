import PropTypes from 'prop-types';

const PreviewImage = ({ src, alt = '', className = '' }) => {
  return (
    <img
      className={`preview-image w-100 h-100 ${className}`}
      src={src}
      alt={alt}
    />
  );
};

PreviewImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default PreviewImage;
