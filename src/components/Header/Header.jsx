import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logOutModal } from 'store/modal/modalSlice';
import { selectIsLoggedIn } from 'store/auth/authSelectors';
import { logOutModalSelector, settingModalSelector } from 'store/modal/modalSelector';
import { Svg } from 'components/Icons/Icons';
import Icons from '../../images/icons.svg';
import BasicPopover from '../BasicPopover/BasicPopover';
import Modal from 'components/Modal/Modal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import "../../index"
import css from "./Header.module.css"

export const Header = () => {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn) 
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
      <div className="container">
        <div className={css.block}>
          <nav className={css.nav}>
            <ul className={css.list}>
              <li>
                {!isLoggedIn? 
                  <Link to="/welcome">
                    <Svg id="#logo" width={102} height={48}/> 
                  </Link>
                : <Link to="/home">
                    <Svg id="#logo" width={102} height={48}/> 
                  </Link>}
              </li>
              <li>
                <Link to="/signin" className={css.link}>
                  <span className={css.signin}>Sign In</span>
                  <svg className={css.icon} width="28" height="28">
                    <use href={Icons + '#user-1'}></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          {/* {isLoggedIn? */}
           <BasicPopover/> 
           {/* : null} */}
        </div>
        {logOutClose ? <Modal onClose={onCloseLogOut} >
                        <UserLogoutModal onClose={onCloseLogOut} /> 
                      </Modal>
                    : null}
        {settingModal ? <Modal onClose={onCloseSetting} >
                        {/* <Setting onClose={onCloseSetting} />  */}
                      </Modal>
                    : null}
      </div>
    </header>
  );
};
