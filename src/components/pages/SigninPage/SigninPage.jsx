// import AuthForm from 'components/AuthForm/AuthForm'
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/auth/authOperations';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Eye } from 'images/eye.svg';
import { ReactComponent as EyeSlash } from 'images/eye-slash.svg';
import css from './SigninPage.module.css';

import { useState } from 'react';

const SigninPage = () => {
  const dispatch = useDispatch();
  const [logPassword, setLogPassword] = useState('');
  const [logEmail, setLogEmail] = useState('');
  const [flagWatch, setFlagWatch] = useState(false);

  const navigate = useNavigate();
  // console.log(error);
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    dispatch(
      logIn({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        setLogEmail('');
        setLogPassword('');
        navigate('/home');
      })
      .catch(() => alert('Введенні почта або пароль не є вірними!'));
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
            <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
              <h1 className={css.title}>Sign In</h1>
              <p className={css.description}>Enter your email</p>
          <label>
            <input placeholder='E-mail' className={css.input} type="email" name="email" onChange={handleChange} value={logEmail}/>
              </label>
              <p className={css.description}>Enter your password</p>
          <label className={css.form_label}>
            <input placeholder='Password' className={css.input}  type={flagWatch ? 'text' : 'password'} name="password" onChange={handleChange} value={logPassword} />
            <div
              onClick={() => {
                setFlagWatch(!flagWatch);
              }}
              className={css.svg_input_password}
            >
              {flagWatch ? <Eye /> : <EyeSlash />}
            </div>
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
