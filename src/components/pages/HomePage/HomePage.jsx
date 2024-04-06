import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { dailyNormaModalSelector } from 'store/modal/modalSelector';
// import { dailyNormaModal } from 'store/modal/modalSlice';

const HomePage = () => {

  // const dispatch = useDispatch()
  // const dailyNormaClose = useSelector(dailyNormaModalSelector)

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
