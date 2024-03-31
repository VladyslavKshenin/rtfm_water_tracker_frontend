import header from './Header.module.css'
import { AuthForm } from 'components/AuthForm/AuthForm'
import Logo from '../../images/Logo.jpg'

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
          <AuthForm />
        </div>
      </header>

    </>
  )
}

