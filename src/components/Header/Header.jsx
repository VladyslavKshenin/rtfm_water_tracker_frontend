import header from './Header.module.css'
import Logo from '../../images/Logo.jpg'
import { UserAuth } from './UserAuth/UserAuth'

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt='Logo' />

          <p> 
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

