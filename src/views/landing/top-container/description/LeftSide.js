import PrimaryButton from 'views/components/PrimaryButton';
import Label from 'views/components/Label';

const LeftSide = () => {
  return (
    <div className="description-left-side d-flex flex-column align-items-start">
      <span className="description-left-side__primary-text font-weight-bold">
        You can buy anything with <Label label="COINCASH" />
      </span>
      <span className="description-left-side__secondary-text">
        The easiest way to use your cryptocurrencies for everyday purchases.
      </span>
      <PrimaryButton label="Download now for free" />
    </div>
  );
};

export default LeftSide;
