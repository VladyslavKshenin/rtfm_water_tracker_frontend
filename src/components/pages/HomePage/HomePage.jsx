import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Modal from 'components/Modal/Modal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';


const HomePage = () => {

  const isLoading = useSelector();


  return (
    <>
      <Modal>
        <UserLogoutModal />
      </Modal>
      <DailyNorma />
      <WaterProgress />
      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;