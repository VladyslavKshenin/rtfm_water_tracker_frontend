import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from './validation';
import { ReactComponent as Eye } from 'images/eye.svg';
import { ReactComponent as EyeSlash } from 'images/eye-slash.svg';
import css from './AuthForm.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Notify } from "notiflix"
import { logIn } from 'store/auth/authOperations';

const SignInAuthForm = () => {

  const [flagWatch, setFlagWatch] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
 
    dispatch(
      logIn({
        email: data.email, 
        password: data.password
      }))
      .unwrap()
      .then(() => {
        Notify.success('Login is successful!');
        reset()
        navigate('/home');
      })
      .catch((err) => {Notify.failure(('Введенні почта або пароль не є вірними!'))})  }


  return (
    <form action="login" autoComplete="on" className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={css.title}>Sign In</h1>
      <label htmlFor="email" className={css.description}>Enter your email</label>
      <input id="email" className={errors?.email ? css.input + " " + css.inputError : css.input}
          placeholder='E-mail...'
          {...register('email')}/>
      <div className={css.error}>
        {errors?.email && <p>{ errors?.email.message || "Errors!" }</p>}
      </div>

      <label htmlFor="password" className={css.description}>Enter your password</label>
      <div className={css.svg_input_password}>
        {flagWatch ? 
            <span className={css.icon} onClick={() => {setFlagWatch(!flagWatch)}}><Eye /></span> 
          : 
          <span onClick={() => {setFlagWatch(!flagWatch)}} className={css.icon}><EyeSlash /></span> }
      <input id="password" 
        className={errors?.password ? css.input + " " + css.inputError : css.input}
        placeholder="Password" 
        type={flagWatch ? 'text' : 'password'}
        {...register("password")}/>
      </div>
      <div className={css.error}>
        {errors?.password && <p>{ errors?.password.message || "Errors!" }</p>}
      </div>

      <button type="submit" className={css.button}>Sign In</button>

      <Link className={css.sign} to="/signup">Sign Up</Link>
    </form>
  )
}

export default SignInAuthForm