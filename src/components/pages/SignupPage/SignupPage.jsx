import css from '../SigninPage/SigninPage.module.css';
import SignUpAuthForm from 'components/AuthForm/SignUpAuthForm';

const SignupPage = () => {
 
  return (
    <section className="signSection">
      <div className="signMain">
        <div className="container">
          <div className={css.contPosition}>
            <SignUpAuthForm/>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default SignupPage;


