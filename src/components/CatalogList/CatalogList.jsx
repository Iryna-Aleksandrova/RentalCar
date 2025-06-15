import { Link } from 'react-router-dom';
import DefaultLoadingCar from '../../assets/images/DefaultLoadingCar.png';
import { formatMileage } from '../../utils/formatMileage.js';
import FavoriteBtn from '../favoriteBtn/FavoriteBtn.jsx';
import s from './CatalogList.module.css';

const CatalogList = ({ cars }) => {
  return (
    <ul className={s.catalogList}>
      {cars.map(
        ({
          id,
          img,
          brand,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        }) => (
          <li key={id} className={s.catalogItem}>
            <img
              src={img || DefaultLoadingCar}
              alt={`${brand} ${model}`}
              className={s.carImage}
              onError={e => {
                e.target.src = DefaultLoadingCar;
              }}
            />
            <FavoriteBtn carId={id} />
            <div className={s.carInfo}>
              <div className={s.mainInfo}>
                <h2 className={s.carBrand}>
                  <span className={s.accent}> {brand}</span> {model},{' '}
                  <span className={s.accent}>{year}</span>
                </h2>
                <p>${rentalPrice}</p>
              </div>
              <div className={s.addressRentalCompany}>
                <p className={s.additionalInfo}>
                  <span className={s.city}>{address.split(', ')[1]}</span>
                  <span className={s.country}>{address.split(', ')[2]}</span>
                </p>
                <p className={s.additionalInfo}>{rentalCompany}</p>
              </div>
              <div className={s.typeMileage}>
                <p className={s.additionalInfo}>{type}</p>
                <p className={s.additionalInfo}>{formatMileage(mileage)}</p>
              </div>
            </div>
            <Link to={`/catalog/${id}`} className={s.carLink}>
              <button className={s.btn}>Read more</button>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default CatalogList;
