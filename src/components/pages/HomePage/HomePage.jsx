import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css';
import Today from 'components/Today/Today.jsx';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getWaterTodayThunk } from 'store/water/waterThunk.js';


const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch]);

  return (
    <section className={css.sectionHome}>
      <div className={`container ${css.containerHome}`}>
        <div>
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
