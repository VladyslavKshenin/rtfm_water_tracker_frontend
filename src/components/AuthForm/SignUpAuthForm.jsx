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
import { registeration } from 'store/auth/authOperations';

const SignUpAuthForm = () => {
  const [flagWatch, setFlagWatch] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
    
    if (data.password !== data.passwordRepeat) {
          Notify.failure('Паролі не співпадають');
          return;
        }

    dispatch(
      registeration({
      email: data.email, 
      password: data.password
    }))
      .unwrap()
      .then(() => {
        Notify.success('Registered successfully!');
        reset()
        navigate('/signin');
      })
      .catch((err) => {
        Notify.failure(('Такий email вже використовується'))
      })  
    }

  return (
    <form action="register" className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={css.title}>Sign Up</h1>
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

      <label htmlFor="password" className={css.description}>Repeat password</label>
      <div className={css.svg_input_password}>
        {flagWatch ? 
            <span className={css.icon} onClick={() => {setFlagWatch(!flagWatch)}}><Eye /></span> 
          : 
          <span onClick={() => {setFlagWatch(!flagWatch)}} className={css.icon}><EyeSlash /></span> }
      <input id="password" 
        className={errors?.password ? css.input + " " + css.inputError : css.input}
        placeholder='Repeat password' 
        type={flagWatch ? 'text' : 'password'}
        {...register("passwordRepeat")}/>
      </div>
      <div className={css.error}>
        {errors?.password && <p>{ errors?.password.message || "Errors!" }</p>}
      </div>

      <button type="submit" className={css.button}>Sign Up</button>

      <Link className={css.sign}to="/signin">Sign In</Link> 
             
    </form>
  )
}

export default SignUpAuthForm


            // <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
          //     <h1 className={css.title}>Sign In</h1>
          //     <p className={css.description}>Enter your email</p>
          // <label>
          //   <input placeholder='E-mail' className={css.input} type="email" name="email" onChange={handleChange} value={logEmail}/>
          //     </label>
//               <p className={css.description}>Enter your password</p>
//           <label className={css.form_label}>
//             <input placeholder='Password' className={css.input}  type={flagWatch ? 'text' : 'password'} name="password" onChange={handleChange} value={logPassword} />
//             <div
//               onClick={() => {
//                 setFlagWatch(!flagWatch);
//               }}
//               className={css.svg_input_password}
//             >
//               {flagWatch ? <Eye /> : <EyeSlash />}
//             </div>
//           </label>
//           <button className={css.button} type="submit">
//             Sign In
//               </button>
//               <p className={css.sign}>
//           <Link to="/signup">Sign Up</Link>
//         </p>
//         </form>