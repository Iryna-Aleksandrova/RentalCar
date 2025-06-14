import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <p className={s.title}>
        Oops, something went wrong! Please try reloading this page!
      </p>
      <div>
        <NavLink to="/" className={s.btn}>
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
