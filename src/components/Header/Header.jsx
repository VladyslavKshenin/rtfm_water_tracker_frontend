import { useDispatch, useSelector } from 'react-redux';
import { logOutModal } from 'store/modal/modalSlice';
import { settingModal } from 'store/modal/modalSlice';
import { logOutModalSelector, settingModalSelector } from 'store/modal/modalSelector';
import Logo from './UserAuth/Logo';
import Modal from 'components/Modal/Modal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import UserAuth from './UserAuth/UserAuth';
import "../../index";
import css from "./Header.module.css";
import SettingModal from 'components/UserSettings/SettingModal';
import UploadImage from 'components/UserSettings/UploadImage';
import UserSettingsForm from 'components/UserSettings/UserSettingsForm';

export const Header = () => {

  const dispatch = useDispatch()
  const logOutClose = useSelector(logOutModalSelector);
  const settingClose = useSelector(settingModalSelector);

  const onCloseLogOut = () => {
    dispatch(logOutModal())
  }

  const onCloseSetting = ()=>{
    dispatch(settingModal())
  }

  return (
    <header className={css.header}>
      <div className="container">
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
        {settingClose ? <Modal active={settingClose} onClose={onCloseSetting} >
                          <SettingModal onClose={onCloseSetting}>
                            <UploadImage />
                            <UserSettingsForm onClose={onCloseSetting}/>
                          </SettingModal>
                        </Modal>
                    : null}
      </div>
    </header>
  );
};
