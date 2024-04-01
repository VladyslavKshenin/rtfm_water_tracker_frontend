// import AuthForm from 'components/AuthForm/AuthForm'
import { useDispatch ,useSelector} from 'react-redux';
import { logIn } from '../../../store/auth/authOperations';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { selectError } from 'store/auth/authSelectors';

const SigninPage = () => {

  const dispatch = useDispatch();
  const [logPassword,setLogPassword]=useState('');
  const [logEmail,setLogEmail]=useState('');
  const error = useSelector(selectError);
  console.log(error);
  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    dispatch(
      logIn({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    if(error===null){
    setLogEmail('')
    setLogPassword('')
    }
  };
  const handleChange = (e)=>{
    const {name,value}=e.currentTarget;

    if(name==='email'){
    setLogEmail(value)
  }
    else {
      setLogPassword(value)
    }
  }

  return (
    <>
      <h1>Log In</h1>

      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            E-mail:
            <input type="email" name="email" onChange={handleChange} value={logEmail}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={handleChange} value={logPassword} />
          </label>
          <button type="submit">
            Sign In
          </button>
        </form>

        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
    // <AuthForm/>
  )
}

export default SigninPage