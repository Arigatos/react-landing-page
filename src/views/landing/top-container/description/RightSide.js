import Circle from 'views/components/Circle';
import iphone from 'assets/images/iphone.png';

const RightSide = () => {
  return (
    <div className="description-right-side">
      <Circle size="lg" />
      <Circle size="md" />
      <img
        src={iphone}
        className="description-right-side__iphone"
        alt="iphone"
      />
    </div>
  );
};

export default RightSide;
