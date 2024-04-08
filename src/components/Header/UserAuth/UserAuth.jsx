import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'store/auth/authSelectors';
import { useSelector } from 'react-redux';

import Icons from '../../../images/icons.svg';
import css from '../Header.module.css';
import BasicPopover from '../../BasicPopover/BasicPopover';

const UserAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const usersInformation = useSelector(selectUser)
    const {name, email, avatar} = usersInformation;
    console.log('name', name)
    console.log('email', email)
    console.log('avatar', avatar)
    const nameWitchEmail = email?.slice(0, email?.indexOf("@")); 
        const userName = name ? name : nameWitchEmail;
        const userAvatar = email?.slice(0, 1).toUpperCase()
        console.log('userAvatar', userAvatar) 



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
        <span className={css.userInfo}>
            {avatar && name &&  (<>
                                    <span>{name}</span>
                                    <img src="" alt="User's avatar" />
                                </>)}
            {!avatar && name && (<> 
                                    <span className={css.userName}>{name}</span>
                                    <span className={css.userAvatar}>{userAvatar}</span>
                                </>)}
            {!avatar && !name &&    (<>
                                        <span className={css.userName}>{userName}</span>
                                        <span className={css.userAvatar}>{userAvatar}</span>
                                    </>)}
        
            <BasicPopover />
        </span>
      )}
    </>
  );
};

export default UserAuth;
