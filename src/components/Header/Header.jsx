import { Svg } from 'components/Icons/Icons';
import Icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  //Для спан-юзера зроби бордер
  // <span>
  // <Svg id="#user" width={14} height={18}/>
  // </span>
  return (

      <div className="container">
        <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <Link to="/welcome">
                <Svg id="#logo" width={102} height={48} />
              </Link>
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
      </div>
    </header>
  );
};
