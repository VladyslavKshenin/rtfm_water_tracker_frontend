import css from '../SigninPage/SigninPage.module.css';
import SignUpAuthForm from 'components/AuthForm/SignUpAuthForm';

const SignupPage = () => {
 
  return (
    <section className="signMain">
      <div className="signSection">
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


