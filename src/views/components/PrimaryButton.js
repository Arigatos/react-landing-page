import PropTypes from 'prop-types';

const PrimaryButton = ({ label, className, disabled, onClick }) => {
  return (
    <button
      className={`bg-primary padding-y-12 pl-3 pr-3 font-20 border-radius-base font-weight-semibold text-white cursor-pointer ${className} ${
        disabled ? 'bg-gray' : ''
      }`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.bool,
};

export default PrimaryButton;
