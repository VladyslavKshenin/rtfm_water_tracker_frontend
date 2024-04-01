// import AuthForm from 'components/AuthForm/AuthForm'
import { Link } from "react-router-dom"
import { selectError } from "store/auth/authSelectors.js";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../store/auth/authOperations';
import { useState } from 'react';

const SignupPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError)
  const [regEmail,setRegEmail]=useState('');

  const [regPassword,setRegPassword]=useState('');
  const [regRepeatPassword,setRegRepeatPassword]=useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;

    console.log(Form.elements)
    if(regPassword!==regRepeatPassword){
      alert('Паролі не співпадають')
      return;
    }
    dispatch(
      register({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    
    if( error===null){
      setRegEmail('')
      setRegPassword('')
      setRegRepeatPassword('')
    }
  };
  const handleChange = (e)=>{
    const {name,value}=e.currentTarget;
     if(name==='email'){
      setRegEmail(value)
     }
    else if(name==='password') {
      setRegPassword(value)
    }
    else {
      setRegRepeatPassword(value)
    }
  }

  return (
    // <AuthForm/>
    <>
    <h1>Sign Up</h1>
    <div>
  <form onSubmit={handleSubmit} autoComplete="off">
    <label>
    Enter your email
      <input type="email" name="email" onChange={handleChange} value={regEmail}/>
    </label>
     <label>
    Enter your password
      <input type="password" name="password" onChange={handleChange} value={regPassword}/>
    </label> 
    <label>
    Repeat password
      <input type="password" name="password-repeat" onChange={handleChange} value={regRepeatPassword}  />
    </label>
    <button type="submit">
      Sign Up
    </button>
  </form>

  <p>
    <Link to="/signin">Log In</Link>
  </p>
    </div>
    </>
  )
}

export default SignupPage