import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Modal from 'components/Modal/Modal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import { WaterProgress } from 'components/WaterProgress/WaterProgress';

const HomePage = () => {
  return (
    <>
      <Modal>
        <UserLogoutModal />
      </Modal>
      <DailyNorma />
      <WaterProgress />
    </>
  );
};

export default HomePage;
