import Icons from './../../images/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/authSelectors';
import { updateUserData } from 'store/settings/settingsOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from "./UserSettingsForm.module.css";
import { toast } from 'react-toastify';

const UserSettingsForm = () => {
  const  user = useSelector(selectUser);
  const [name, setName] = useState(user?.name || '');
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  let [outdatedPassword, setPassword] = useState('');
  const [newPassword = '', setNewPassword] = useState('');
  const [repeatPassword = '', setRepeatPassword] = useState();
  const dispatch = useDispatch();
  let isSubmit = true;

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const state = {
    gender: gender,
    name: name,
    email: email,
    password: outdatedPassword,
    newPassword: newPassword,
  };

  const handleChangePassword = e => {
    setRepeatPassword(e.target.value);
  };

  const handleChangeNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleChangeOldPassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChange = e => {
    setGender(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (outdatedPassword && !newPassword) {
      toast.error('Please enter new password');
      return;
    }
    if (!outdatedPassword && newPassword) {
      toast.error('Please enter old password');
      return;
    }
    if (newPassword !== repeatPassword) {
      toast.error("Passwords not match");
      return;
    }
    isSubmit = false;
    setNewPassword(newPassword);
    dispatch(updateUserData(state));
    toast.success("User's data updated successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className = {css.form_container}>
        <div>
          <h3 className={css.title}>Your gender identity</h3>
          <div className={css.gender_wrapper}>
            <div className={css.radio_wrapper}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={gender === 'female'}
                />
                <span>Woman</span>
              </label>
            </div>
            <div className={css.radio_wrapper}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={gender === 'male'}
                />
                <span>Man</span>
              </label>
            </div>
          </div>
          <div>
            <label></label>
            <h3 className={css.titleForm}>Your name</h3>
            <input className={css.input}
              name="name"
              type="text"
              aria-describedby="nameHelp"
              onChange={handleChangeName}
              value={name}
              placeholder="Name"
              autoComplete="username"
              required
            />
          </div>
          <label></label>
          <h3 className={css.titleForm}>E-mail</h3>
            <input className={css.input}
              name="email"
              type="email"
              id="InputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChangeEmail}
              value={email}
              placeholder="Email"
              autoComplete="email"
              required
            />
          
        </div>
        <div>
          <h3 className={css.title}>Password</h3>
          <div>
            <div className={css.form_text}>Outdated password:</div>
            <div className={css.password_wrapper}>
              <span className={css.eye_button} onClick={() => setShowPassword(!showPassword)}>
                <svg>
                  <use
                    href={Icons + (showPassword ? '#eye' : '#eyeslash')}
                  ></use>
                </svg>
              </span>
              <input className={css.inputPasw}
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChangeOldPassword}
                value={outdatedPassword}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <div className={css.form_text}>New Password:</div>
            <div>
              <div className={css.password_wrapper}>
                <span className={css.eye_button} onClick={() => setShowNewPassword(!showNewPassword)}>
                  <svg>
                    <use
                      href={
                        Icons + (showNewPassword ? '#eye' : '#eyeslash')
                      }
                    ></use>
                  </svg>
                </span>
                <input className={css.inputPasw}
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  onChange={handleChangeNewPassword}
                  value={newPassword}
                  id="exampleInputPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div>
            <div className={css.form_text}>Repeat new password:</div>
            <div>
              <div className={css.password_wrapper}>
                <span className={css.eye_button}
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                >
                  <svg>
                    <use
                      href={
                        Icons + (showRepeatPassword ? '#eye' : '#eyeslash')
                      }
                    ></use>
                  </svg>
                </span>
                <input className={css.inputPasw}
                  name="repeatPassword"
                  type={showRepeatPassword ? 'text' : 'password'}
                  onChange={handleChangePassword}
                  value={repeatPassword}
                  id="exampleInputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.flexbtn}>
      <button className = {css.button} disabled={!isSubmit} type="submit">
        Save
        </button>
        </div>
    </form>
  );
};

export default UserSettingsForm;