import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/icons.svg';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  return (
    <header className={s.header}>
      <svg className={s.icon} width="104" height="16">
        <use href={`${sprite}#icon-Logo`} />
      </svg>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
