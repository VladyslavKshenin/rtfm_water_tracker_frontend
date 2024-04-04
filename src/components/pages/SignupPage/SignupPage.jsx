// import AuthForm from 'components/AuthForm/AuthForm'
import { Link, useNavigate } from 'react-router-dom';
import css from './SignupPage.module.css';
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
      .catch(() => alert('Please enter all input'));
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
    // <AuthForm/>
    <>
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Enter your email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={regEmail}
            />
          </label>
          <label className={css.form_label}>
            Enter your password
            <input
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
              {!flagWatch ? <Eye /> : <EyeSlash />}
            </div>
          </label>
          <label className={css.form_label}>
            Repeat password
            <input
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
              {!flagWatch ? <Eye /> : <EyeSlash />}
            </div>
          </label>
          <button type="submit">Sign Up</button>
        </form>

        <p>
          <Link to="/signin">Log In</Link>
        </p>
      </div>
    </>
  );
};

export default SignupPage;
