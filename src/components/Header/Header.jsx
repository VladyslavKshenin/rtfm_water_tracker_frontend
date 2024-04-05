import { Svg } from 'components/Icons/Icons';
import Icons from '../../images/icons.svg';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectorIsAuth } from 'store/auth/authSelectors';
import BasicPopover from '../BasicPopover/BasicPopover';
// import Modal from 'components/Modal/Modal';
// import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
// import { showModalSelector } from 'store/modal/modalSelector';
import "../../index"
import css from "./Header.module.css"

export const Header = () => {

  const isAuth = useSelector(selectorIsAuth) 
  // const showLogOut = useSelector(showModalSelector);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.block}>
          <nav className={css.nav}>
            <ul className={css.list}>
              <li>
                {!isAuth? 
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
          {isAuth? <BasicPopover/> : null}
        </div>
        {/* {showLogOut ? 
        // <Modal>
                        <UserLogoutModal /> 
                      // </Modal>
                    : null} */}
      </div>
    </header>
  );
};
