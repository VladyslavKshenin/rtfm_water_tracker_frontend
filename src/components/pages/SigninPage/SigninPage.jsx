// import AuthForm from 'components/AuthForm/AuthForm'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../store/auth/authOperations';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { selectError } from 'store/auth/authSelectors';

import css from './SigninPage.module.css'

const SigninPage = () => {
  const dispatch = useDispatch();
  const [logPassword, setLogPassword] = useState('');
  const [logEmail, setLogEmail] = useState('');
  const error = useSelector(selectError);
  const navigate = useNavigate();
 console.log('error', error)
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    dispatch(
      logIn({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    if (error === null) {
      setLogEmail('');
      setLogPassword('');
      navigate('/home');
    }
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'email') {
      setLogEmail(value);
    } else {
      setLogPassword(value);
    }
  };

  return (
    <section className='signSection'>
      <div className='signMain'>
        <div className='container'>
          <div className={css.contPosition}>
            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
              <h1 className={css.title}>Sign In</h1>
              <p className={css.description}>Enter your email</p>
          <label>
            <input placeholder='E-mail' className={css.input} type="email" name="email" onChange={handleChange} value={logEmail}/>
              </label>
              <p className={css.description}>Enter your password</p>
          <label>
            <input placeholder='Password' className={css.input} type="password" name="password" onChange={handleChange} value={logPassword} />
          </label>
          <button className={css.button} type="submit">
            Sign In
              </button>
              <p className={css.sign}>
          <Link to="/signup">Sign Up</Link>
        </p>
        </form>
      </div>
    </div>
      </div>
    </section>
    
    // <AuthForm/>
  )
}

export default SigninPage;
