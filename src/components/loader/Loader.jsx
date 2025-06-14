import { PulseLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = ({ loading }) => {
  return (
    <div className={s.loaderWrapper}>
      <PulseLoader
        color="var(--main-color-button)"
        loading={loading}
        aria-label="pulse-loading-spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
