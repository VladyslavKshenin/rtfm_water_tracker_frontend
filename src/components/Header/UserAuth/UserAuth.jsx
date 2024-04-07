import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth/authSelectors';
import { useSelector } from 'react-redux';

import Icons from '../../../images/icons.svg';
import css from '../Header.module.css';
import BasicPopover from '../../BasicPopover/BasicPopover';

const UserAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const usersInformation = useSelector(selectUser)
  // const {name, email, avatar} = usersInformation;
  // console.log('first', usersInformation)

  return (
    <>
      {!isLoggedIn ? (
        <Link to="/signin" className={css.link}>
          <span className={css.signin}>Sign In</span>
          <svg className={css.icon} width="28" height="28">
            <use href={Icons + '#user-1'}></use>
          </svg>
        </Link>
      ) : (
        <span>
          <span>xzcwsacxsacsc</span>
          <img src="" alt="" />
          <BasicPopover />
        </span>
      )}
    </>
  );
};

export default UserAuth;
