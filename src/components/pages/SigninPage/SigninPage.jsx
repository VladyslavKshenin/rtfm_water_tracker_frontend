
import SignInAuthForm from 'components/AuthForm/SignInAuthForm';
import css from './SigninPage.module.css';

const SigninPage = () => {
 
  return (
    <section className='signMain'>
      <div className='signSection'>
        <div className='container'>
          <div className={css.contPosition}>
          <SignInAuthForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SigninPage;
