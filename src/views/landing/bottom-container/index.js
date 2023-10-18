import Label from 'views/components/Label';
import SignUpEmail from 'views/components/SignUpEmail';
import Navigation from 'views/components/Navigation';
import { options } from './config';
import whiteLogo from 'assets/svgs/logo-white.svg';

const BottomContainer = () => {
  return (
    <div className="bottom-container text-white">
      <div className="header d-flex align-items-center justify-content-center flex-column text-center">
        <span className="font-48 font-weight-bold">
          Get started <Label label="today" />
        </span>
        <span className="mt-2">
          Sing up to receive email updates on new products announcements,
          special promotions sales an more.
        </span>
      </div>

      <SignUpEmail />

      <Navigation
        logo={whiteLogo}
        options={options}
        wrapperClassName="font-16"
      />
    </div>
  );
};

export default BottomContainer;
