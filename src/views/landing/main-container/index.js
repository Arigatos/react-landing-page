import Header from './Header';
import Examples from './examples';
import Services from './services';

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="d-flex align-items-center justify-content-center font-24 bg-primary text-white pt-3 pb-3 text-center">
        over 200,000+ users have chosen COINCASH <br /> for everyday payments
      </div>
      <div className="main-container-information">
        <Header />
        <Services />
        <Examples />
      </div>
    </div>
  );
};

export default MainContainer;
