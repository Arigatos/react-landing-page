import SvgRender from 'views/components/SvgRender';
import Label from 'views/components/Label';
import { services } from './config';

const Services = () => {
  return (
    <div className="services d-flex align-items-center justify-content-between">
      {(services || [])?.map((service, i) => (
        <div key={i} className="text-center">
          <SvgRender src={service.icon} />
          <div className="services-text">
            You can <br />
            <Label label={service.colorLabel} /> {service.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
