
import { DailyNorma } from 'components/DailyNorma/DailyNorma'
import Modal from 'components/Modal/Modal'
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal'

const HomePage = () => {
  return (
    <>
      <Modal>
       <UserLogoutModal/>
    </Modal>
    <DailyNorma/>
    </>
    
  )
}

export default HomePage