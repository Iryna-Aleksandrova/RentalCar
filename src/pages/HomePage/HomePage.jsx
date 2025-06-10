import DocumentTitle from '../../components/DocumentTitle';
import s from './HomePage.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <div>
        <h1 data-aos="flip-left" className={s.title}>
          Phonebook: All Your Contacts in One Place
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
