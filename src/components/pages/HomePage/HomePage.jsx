// import AuthForm from 'components/AuthForm/AuthForm';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';

import { WaterProgress } from 'components/WaterProgress/WaterProgress';
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';

const HomePage = () => {
  // const isLoading = useSelector();

  return (
    <section>
      <div className="container">
        {/* <AuthForm/> */}
        <DailyNorma />
        <WaterProgress />
        {/* {isLoading && <Loader />} */}
      </div>
      
    </section>
  );
};

export default HomePage;
