import { Svg } from 'components/Icons/Icons';
import Icons from '../../images/icons.svg';
import { Link } from 'react-router-dom'
import css from "./Header.module.css"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/authSelectors';
import BasicPopover from './BasicPopover';

export const Header = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn) 

  return (
    <header>
      <div className="container">
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
            <li><BasicPopover/></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
