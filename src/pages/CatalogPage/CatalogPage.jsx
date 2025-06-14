import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import SearchForm from '../../components/searchForm/SearchForm.jsx';
import ReadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn.jsx';
import Loader from '../../components/loader/Loader.jsx';

import { getCars } from '../../redux/cars/operations.js';
import { clearCars } from '../../redux/cars/slice.js';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const {
    items: cars = [],
    loading,
    error,
    totalCount = 0,
  } = useSelector(state => state.cars);

  const { brand, price, mileageFrom, mileageTo } = useSelector(
    state => state.filters,
  );

  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    dispatch(clearCars());
    setPage(1);
  }, [brand, price, mileageFrom, mileageTo, dispatch]);

  useEffect(() => {
    const filters = {
      brand,
      price,
      minMileage: mileageFrom,
      maxMileage: mileageTo,
      page,
      limit,
    };

    console.log('Dispatching getCars with:', filters);
    dispatch(getCars(filters));
  }, [dispatch, brand, price, mileageFrom, mileageTo, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={s.container}>
      <SearchForm />

      {loading && page === 1 && <Loader />}

      {cars.length > 0 ? (
        <CatalogList cars={cars} />
      ) : (
        !loading && (
          <p className={s.noCars}>
            Hmm, no cars fit your search. Want to try something else?
          </p>
        )
      )}

      {cars.length < totalCount && !loading && (
        <div className={s.loadMoreWrapper}>
          <ReadMoreBtn onClick={handleLoadMore} />
        </div>
      )}

      {!loading && cars.length > 0 && cars.length >= totalCount && (
        <p className={s.noCars}>
          That’s all we’ve got for now — check back soon for more!
        </p>
      )}

      {loading && page > 1 && <Loader />}

      {error && <p className={s.error}>Oops, something went wrong: {error}</p>}
    </div>
  );
};

export default CatalogPage;
