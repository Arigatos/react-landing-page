import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const SvgRender = ({ src }) => {
  return <ReactSVG src={src} className="d-inline-flex" />;
};

SvgRender.propTypes = {
  src: PropTypes.string.isRequired,
};

export default SvgRender;
