import Description from './description';
import blueLogo from 'assets/svgs/logo-blue.svg';
import navbarOptions from './navigation/config';
import Navigation from 'views/components/Navigation';

const TopContainer = () => {
  return (
    <div className="top-container position-relative">
      <Navigation logo={blueLogo} options={navbarOptions} showButton />
      <Description />
    </div>
  );
};

export default TopContainer;
