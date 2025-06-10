import s from './NotFound.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const NotFound = () => {
  return (
    <div>
      <p data-aos="flip-left" className={s.title}>
        Oops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default NotFound;
