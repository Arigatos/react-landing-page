import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SvgRender from 'views/components/SvgRender';
import PrimaryButton from './PrimaryButton';

const Navigation = ({
  logo,
  options,
  wrapperClassName,
  showButton = false,
}) => {
  return (
    <div className={`navigation w-100 ${wrapperClassName}`}>
      <SvgRender src={logo} />
      <div>
        {options?.map((opt, i) => (
          <NavLink
            key={i}
            className="font-weight-semibold mr-3"
            // to={opt.label}
          >
            {opt.name}
          </NavLink>
        ))}

        {showButton ? <PrimaryButton label="Get the app" /> : null}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  logo: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  wrapperClassName: PropTypes.string,
  showButton: PropTypes.bool,
};

export default Navigation;
