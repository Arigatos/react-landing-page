import { NavLink } from 'react-router-dom';
import navbarOptions from './config';

const NavbarOptions = () => {
  return navbarOptions?.map((opt, i) => (
    <NavLink
      key={i}
      className="font-weight-semibold mr-3"
      // to={opt.label}
    >
      {opt.name}
    </NavLink>
  ));
};

export default NavbarOptions;
