// import AuthForm from 'components/AuthForm/AuthForm'
import { Link, useNavigate } from 'react-router-dom';
import css from '../SigninPage/SigninPage.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/authOperations';
import { useState } from 'react';
import { ReactComponent as Eye } from 'images/eye.svg';
import { ReactComponent as EyeSlash } from 'images/eye-slash.svg';

const SignupPage = () => {
  const dispatch = useDispatch();
  const [regEmail, setRegEmail] = useState('');
  const [flagWatch, setFlagWatch] = useState(false);

  const [regPassword, setRegPassword] = useState('');
  const [regRepeatPassword, setRegRepeatPassword] = useState('');
  const navigate = useNavigate();
  function validateEmail(email) {
    let re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    if (!validateEmail(regEmail)) {
      alert('Введіть коректний email');
      return;
    }
    if (
      regPassword.length < 8 ||
      regRepeatPassword.length < 8 ||
      regPassword.length > 64 ||
      regRepeatPassword.length > 64
    ) {
      alert('Пароль повинен містити від 8 до 64 символів!');
      return;
    }

    if (regPassword !== regRepeatPassword) {
      alert('Паролі не співпадають');
      return;
    }

    dispatch(
      register({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        setRegEmail('');
        setRegPassword('');
        setRegRepeatPassword('');
        navigate('/signin');
      })
      .catch(error => {
        alert('Такий email вже використовується');
      });
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
            <form
              className={css.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h1 className={css.title}>Sign Up</h1>
              <p className={css.description}>Enter your email</p>
              <label>
                <input
                  placeholder="E-mail"
                  className={css.input}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={regEmail}
                />
              </label>
              <p className={css.description}>Enter your password</p>
              <label className={css.form_label}>
                <input
                  placeholder="Password"
                  className={css.input}
                  type={flagWatch ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  value={regPassword}
                />
                <div
                  onClick={() => {
                    setFlagWatch(!flagWatch);
                  }}
                  className={css.svg_input_password}
                >
                  {flagWatch ? <Eye /> : <EyeSlash />}
                </div>
              </label>
              <p className={css.description}>Repeat password</p>
              <label className={css.form_label}>
                <input
                  placeholder="Repeat password"
                  className={css.input}
                  type={flagWatch ? 'text' : 'password'}
                  name="password-repeat"
                  onChange={handleChange}
                  value={regRepeatPassword}
                />
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
  );
};

export default SignupPage;
