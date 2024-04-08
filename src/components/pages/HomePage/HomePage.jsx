import { DailyNorma } from 'components/DailyNorma/DailyNorma';

import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import css from './HomePage.module.css'
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';

const HomePage = () => {
  // const isLoading = useSelector();

  return (
    <>
      <div className={css.cont}>

        <DailyNorma />
      </div>
      <div className={css.secondCont}>
      <WaterProgress />
        {/* {isLoading && <Loader />} */}
      </div>
    </>
  );
};

export default HomePage;
