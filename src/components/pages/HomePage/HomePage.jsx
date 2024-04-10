import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css'
import Today from 'components/Today/Today.jsx';
// import { useSelector } from 'react-redux';
const HomePage = () => {

  return (
    <section className={css.sectionHome}>
      <div className={`container ${css.containerHome}`}>
        <div className={css.direction}>
          <DailyNorma />
          <WaterProgress />
        </div>
        
        <div className={css.waterRateContainer}>
          <Today/>
          <CalendarContainer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
