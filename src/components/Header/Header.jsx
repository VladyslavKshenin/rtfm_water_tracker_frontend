import header from './Header.module.css'
import Logo from '../../images/Logo.jpg'
import { UserAuth } from './UserAuth/UserAuth'

export const Header = () => {
  return (
    <>
      <header className={header.css}>
        <div>
          <img src={Logo} alt='Logo' />

          <p>
            Water
            <br />
            Tracker
          </p>
        </div>


        <UserAuth />
      </header>

    </>
  )
}

