import { useDispatch, useSelector } from 'react-redux';
import { logOutModal } from 'store/modal/modalSlice';
import { logOutModalSelector, settingModalSelector } from 'store/modal/modalSelector';
import Logo from './UserAuth/Logo';
import Modal from 'components/Modal/Modal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import UserAuth from './UserAuth/UserAuth';
import "../../index";
import css from "./Header.module.css";

export const Header = () => {

  const dispatch = useDispatch()
  const logOutClose = useSelector(logOutModalSelector);
  const settingModal = useSelector(settingModalSelector);

  const onCloseLogOut = () => {
    dispatch(logOutModal())
  }

  const onCloseSetting = ()=>{
    dispatch(settingModal())
  }

  return (
    <header className={css.header}>
      {/* <div className="container"> */}
        <div className={css.block}>
          <nav className={css.nav}>
            <ul className={css.list}>
              <li>
                <Logo/>
              </li>
              <li>
                <UserAuth/>
              </li>
            </ul>
          </nav>
        </div>
        {logOutClose ? <Modal active={logOutClose} onClose={onCloseLogOut} >
                        <UserLogoutModal onClose={onCloseLogOut} /> 
                      </Modal>
                    : null}
        {settingModal ? <Modal active={settingModal} onClose={onCloseSetting} >
                        {/* <Setting onClose={onCloseSetting} />  */}
                      </Modal>
                    : null}
      {/* </div> */}
    </header>
  );
};
