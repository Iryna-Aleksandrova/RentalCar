import { useId, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { NumericFormat } from 'react-number-format';
import {
  setBrandFilter,
  setMileageFilter,
  setPriceFilter,
} from '../../redux/filters/slice.js';
import { getBrands } from '../../redux/cars/operations.js';
import { carPrice } from '../../constants/constants.js';
import s from './SearchForm.module.css';

const SearchForm = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const priceId = useId();
  const brandId = useId();
  const mileageId = useId();

  const dispatch = useDispatch();
  const brands = useSelector(state => state.cars.brands);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(getBrands());
    }
  }, [dispatch, brands.length]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setBrandFilter(brand));
    dispatch(setPriceFilter(Number(price)));
    dispatch(setMileageFilter({ mileageFrom, mileageTo }));
  };

  const brandOptions = brands.map(brand => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = carPrice;

  const customStyles = {
    control: provided => ({
      ...provided,
      zIndex: 10,
      borderRadius: '12px',
      padding: '0',
      width: '196px',
      height: '44px',
      background: 'var(--main-color-inputs)',
      border: 'none',
      boxShadow: 'none',
      fontFamily: 'var(--font-family-manrope)',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '125%',
      color: 'var(--main-color-black)',
    }),
    placeholder: provided => ({
      ...provided,
      color: 'var(--main-color-black)',
      fontFamily: 'var(--font-family-manrope)',
      fontWeight: 500,
      fontSize: '16px',
    }),
    menu: provided => ({
      ...provided,
      zIndex: 1000,
      maxHeight: '296px',
      overflowY: 'auto',
      borderRadius: '12px',
      fontSize: '16px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      background: 'var(--main-color-white)',
    }),
    option: (provided, state) => ({
      ...provided,
      background: 'var(--main-color-white)',
      color:
        state.isFocused || state.isSelected
          ? 'var(--main-color-black)'
          : 'var(--main-color-gray)',
      fontFamily: 'var(--font-family-manrope)',
      padding: '10px 16px',
      cursor: 'pointer',
    }),
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <label htmlFor={brandId} className={s.description}>
          Car brand
        </label>
        <Select
          inputId={brandId}
          options={brandOptions}
          value={brandOptions.find(option => option.value === brand) || null}
          onChange={selected => setBrand(selected?.value || '')}
          placeholder="Choose a brand"
          styles={customStyles}
          components={{ IndicatorSeparator: () => null }}
          isClearable
        />
      </div>

      <div className={s.wrapper}>
        <label htmlFor={priceId} className={s.description}>
          Price / 1 hour
        </label>
        <Select
          inputId={priceId}
          options={priceOptions}
          value={
            priceOptions.find(option => option.value === Number(price)) || null
          }
          onChange={selected => setPrice(selected?.value || '')}
          placeholder="Choose a price"
          styles={customStyles}
          components={{ IndicatorSeparator: () => null }}
          isClearable
        />
      </div>

      <div className={s.wrapper}>
        <label htmlFor={mileageId} className={s.description}>
          Car mileage / km
        </label>
        <div className={s.fields}>
          <NumericFormat
            name="mileageFrom"
            className={s.fieldRight}
            placeholder="From"
            value={mileageFrom}
            thousandSeparator=" "
            allowNegative={false}
            allowLeadingZeros={false}
            onValueChange={({ value }) => setMileageFrom(value)}
          />

          <NumericFormat
            name="mileageTo"
            className={s.fieldLeft}
            placeholder="To"
            value={mileageTo}
            thousandSeparator=" "
            allowNegative={false}
            allowLeadingZeros={false}
            onValueChange={({ value }) => setMileageTo(value)}
          />
        </div>
      </div>

      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
