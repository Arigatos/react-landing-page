import PropTypes from 'prop-types';

const Circle = ({ size }) => {
  return <div className={`circle circle-${size}`}></div>;
};

Circle.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
};

export default Circle;
