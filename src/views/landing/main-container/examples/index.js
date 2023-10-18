import { examples } from './config';
import PreviewImage from 'views/components/PreviewImage';

const Examples = () => {
  return (
    <div className="examples">
      {(examples || [])?.map((example, i) => {
        const { image, title, description } = example;

        return (
          <div key={i} className="example">
            <PreviewImage src={image} className="example-image" />
            <div className="d-flex flex-column example-text">
              <span className="example-text__title font-weight-semibold">
                {title}
              </span>
              <span className="mt-2">{description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Examples;
