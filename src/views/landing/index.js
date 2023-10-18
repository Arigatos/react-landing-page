import BottomContainer from './bottom-container';
import MainContainer from './main-container';
import TopContainer from './top-container';

const Landing = () => {
  return (
    <div className="landing">
      <TopContainer />
      <MainContainer />
      <BottomContainer />
    </div>
  );
};

export default Landing;
