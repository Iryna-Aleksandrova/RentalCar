import s from './FavoriteBtn.module.css';
import { useState } from 'react';
import sprite from '../../assets/images/icons.svg';
import clsx from 'clsx';

const FavoriteBtn = ({ carId }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(carId);
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (favorites.includes(carId)) {
      updatedFavorites = favorites.filter(id => id !== carId);
    } else {
      updatedFavorites = [...favorites, carId];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(prev => !prev);
  };

  return (
    <button type="btn" className={s.iconWrapper} onClick={toggleFavorite}>
      <svg
        className={clsx(s.iconFavorite, { [s.active]: isFavorite })}
        width="16"
        height="16"
      >
        <use href={`${sprite}#${isFavorite ? 'icon-heart2' : 'icon-heart1'}`} />
      </svg>
    </button>
  );
};

export default FavoriteBtn;
