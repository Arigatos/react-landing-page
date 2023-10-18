import PropTypes from 'prop-types';

const Label = ({ label, color = 'primary', className = '' }) => {
  return <span className={`text-${color} ${className}`}>{label}</span>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
