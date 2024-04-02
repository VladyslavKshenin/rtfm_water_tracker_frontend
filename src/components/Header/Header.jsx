import header from './Header.module.css'
import Logo from '../../images/Logo.jpg'
import { UserAuth } from './UserAuth/UserAuth'

export const Header = () => {
  return (
    <>
      <header className={header.css}>
        <div className={header.position}>
          <img className={header.logo} src={Logo} alt='Logo' />

          <p className={header.description}> 
            Tracker
            <br />
            of water
          </p>
        </div>


        <UserAuth />
      </header>

    </>
  )
}

