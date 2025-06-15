import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCarById } from '../../redux/cars/operations.js';
import { clearCarDetails } from '../../redux/cars/slice.js';

import Loader from '../../components/loader/Loader.jsx';
import BookCarForm from '../../components/bookCarForm/BookCarForm.jsx';

import DefaultLoadingCar from '../../assets/images/DefaultLoadingCar.png';
import sprite from '../../assets/images/icons.svg';

import s from './CatalogDetailsPage.module.css';

const CatalogDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items: cars, carDetails, loading } = useSelector(state => state.cars);

  const car = cars.find(c => c.id === Number(id)) || carDetails;

  useEffect(() => {
    dispatch(getCarById(id));

    return () => {
      dispatch(clearCarDetails());
    };
  }, [id, dispatch]);

  if (loading || !car) {
    return <Loader loading={true} />;
  }

  const {
    img,
    brand,
    model,
    year,
    address = '',
    mileage,
    rentalPrice,
    description,
    type,
    rentalConditions = [],
    functionalities = [],
    fuelConsumption,
    engineSize,
  } = car;

  const [, city = '', country = ''] = address.split(', ');

  return (
    <div className={s.catalogDetailsPage}>
      <div className={s.left}>
        <img
          src={img || DefaultLoadingCar}
          alt={`${brand} ${model}`}
          className={s.carImage}
        />
        <BookCarForm />
      </div>

      <div className={s.right}>
        <h2 className={s.carBrand}>
          {brand} {model}, {year}
        </h2>

        <div className={s.addressRentalCompany}>
          <div className={s.address}>
            <svg className={s.icon} width="16" height="16">
              <use href={`${sprite}#icon-location`} />
            </svg>
            <p className={s.additionalInfo}>
              <span className={s.city}>{city}</span>,{' '}
              <span className={s.country}>{country}</span>
            </p>
            <p className={s.mileage}>Mileage: {mileage.toLocaleString()} km</p>
          </div>
          <p className={s.price}>${rentalPrice}</p>
        </div>

        <p>{description}</p>

        <div className={s.rentalConditions}>
          <p className={s.titleRental}>Rental Conditions:</p>
          <ul className={s.conditionList}>
            {rentalConditions.map((condition, index) => (
              <li key={index} className={s.conditionItem}>
                <svg className={s.iconCheck} width="16" height="16">
                  <use href={`${sprite}#icon-check-circle`} />
                </svg>
                <span className={s.conditionText}>{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.carSpecification}>
          <p className={s.titleSpecification}>Car Specifications:</p>
          <ul>
            <li className={s.specification}>
              <svg className={s.iconCheck} width="16" height="16">
                <use href={`${sprite}#icon-calendar`} />
              </svg>
              <p>Year: {year}</p>
            </li>
            <li className={s.specification}>
              <svg className={s.iconCheck} width="16" height="16">
                <use href={`${sprite}#icon-car`} />
              </svg>
              <p>Type: {type}</p>
            </li>
            <li className={s.specification}>
              <svg className={s.iconCheck} width="16" height="16">
                <use href={`${sprite}#icon-fuel-pump`} />
              </svg>
              <p>Fuel Consumption: {fuelConsumption}</p>
            </li>
            <li className={s.specification}>
              <svg className={s.iconCheck} width="16" height="16">
                <use href={`${sprite}#icon-gear`} />
              </svg>
              <p>Engine Size: {engineSize}</p>
            </li>
          </ul>
        </div>

        <div className={s.accessories}>
          <p className={s.titleSpecification}>
            Accessories and functionalities:
          </p>
          <ul className={s.conditionList}>
            {functionalities.map((item, index) => (
              <li key={index} className={s.conditionItem}>
                <svg className={s.iconCheck} width="16" height="16">
                  <use href={`${sprite}#icon-check-circle`} />
                </svg>
                <span className={s.conditionText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetailsPage;
