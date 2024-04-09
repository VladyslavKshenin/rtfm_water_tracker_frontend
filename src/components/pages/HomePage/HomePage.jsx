import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import CalendarContainer from '../../Calendar/Calendar.jsx';
import css from './HomePage.module.css'
import { useDispatch } from 'react-redux';
import { removeWaterThunk } from 'store/water/waterThunk.js';
import { Notify } from 'notiflix';
import TodayList from 'components/TodayList/TodayList.jsx';

const HomePage = () => { 

  const dispatch = useDispatch()

  const handlerDelete = () => {
    dispatch(removeWaterThunk({id: "66156b3cf5a58db334e1ff9a"}))
      .unwrap()
      .then((payload) => {
        console.log('payload', payload)
        Notify.success("Вдало!")
      })
      .catch((error) => {
        Notify.failure("є проблеми!")
    })
  }
  return (
    <section className={css.sectionHome}>
      <div className={`container ${css.containerHome}`}>
        <div className={css.direction}>
          <DailyNorma />
          <WaterProgress />
        </div>
        
        <div className={css.waterRateContainer}>
          <TodayList/>
          <button type="button" onClick={handlerDelete}>Dalete</button>
          <CalendarContainer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
