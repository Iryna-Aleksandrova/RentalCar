import { useNavigate } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={s.hero}>
      <div className={s.main}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={s.btn} onClick={handleButtonClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
