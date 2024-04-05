// import AuthForm from 'components/AuthForm/AuthForm';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';

import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css';
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';

const HomePage = () => {
  // const isLoading = useSelector();

  return (
    <section className={css.sectionHome}>
      <div className={`container ${css.containerHome}`}>
        <div>
          {/* <AuthForm/> */}
          <DailyNorma />
          <WaterProgress />
          {/* {isLoading && <Loader />} */}
        </div>

        <div className={css.waterRateContainer}>
          <CalendarContainer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
