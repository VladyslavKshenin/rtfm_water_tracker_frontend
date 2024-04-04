import { DailyNorma } from 'components/DailyNorma/DailyNorma';

import { WaterProgress } from 'components/WaterProgress/WaterProgress';
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';

const HomePage = () => {
  // const isLoading = useSelector();

  return (
    <>

      <DailyNorma />
      <WaterProgress />
      {/* {isLoading && <Loader />} */}
    </>
  );
};

export default HomePage;
