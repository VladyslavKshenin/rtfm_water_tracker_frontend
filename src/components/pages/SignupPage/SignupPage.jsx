// import AuthForm from 'components/AuthForm/AuthForm'
import { Link, useNavigate } from 'react-router-dom';
import { selectError } from 'store/auth/authSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../store/auth/authOperations';
import { useState } from 'react';
import css from '../SigninPage/SigninPage.module.css'

const SignupPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  console.log('error', error);
  const [regEmail, setRegEmail] = useState('');

  const [regPassword, setRegPassword] = useState('');
  const [regRepeatPassword, setRegRepeatPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;

    console.log(Form.elements);
    if (regPassword !== regRepeatPassword) {
      alert('Паролі не співпадають');
      return;
    }
    dispatch(
      register({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );

    if (error === null) {
      setRegEmail('');
      setRegPassword('');
      setRegRepeatPassword('');
      navigate('/signin');
    }
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setRegEmail(value);
    } else if (name === 'password') {
      setRegPassword(value);
    } else {
      setRegRepeatPassword(value);
    }
  };

  return (
    
    <section className="signSection">
      <div className="signMain">
        <div className="container">
          <div className={css.contPosition}>
            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
              <h1 className={css.title}>Sign Up</h1>
              <p className={css.description}>Enter your email</p>
    <label>
      <input placeholder="E-mail" className={css.input} type="email" name="email" onChange={handleChange} value={regEmail}/>
    </label>
    <p className={css.description}>Enter your password</p>
     <label>
      <input placeholder="Password" className={css.input} type="password" name="password" onChange={handleChange} value={regPassword}/>
    </label>
    <p className={css.description}>Repeat password</p> 
    <label>
      <input placeholder="Repeat password" className={css.input} type="password" name="password-repeat" onChange={handleChange} value={regRepeatPassword}  />
    </label>
    <button className={css.button} type="submit">
      Sign Up
              </button>
              <p className={css.sign}>
    <Link to="/signin">Sign In</Link>
  </p>
  </form>
    </div>
      </div>
        </div>
    </section>
    // <AuthForm/>
  )
}

export default SignupPage;
