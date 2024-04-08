import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css'
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';

const HomePage = () => {

  return (
    <section className={css.sectionHome}>
      <div className={`container ${css.containerHome}`}>
        <div>
          <DailyNorma />
          <WaterProgress />
        </div>
        
        <div className={css.waterRateContainer}>
          <CalendarContainer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
