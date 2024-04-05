import React from 'react'
import { useForm } from 'react-hook-form'

const AuthForm = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit =(data) => {
    console.log('data', data)
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <form action="login" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">Email</label>
      <input id="email" 
          placeholder='Enter your email...'
          {...register('email', {
            required: "The field is required"
          })}/>
      <div style={{height: 32}}>
        {errors?.email && <p>{ errors?.email.message || "Errors!" }</p>}
      </div>

      <label htmlFor="password">Password</label>
      <input id="password"
          placeholder='Enter your password...' 
          {...register("password", {
            required: "The field is required",
            minLength: {
              value: 8,
              message: "Password is at least 8 characters long"
            }, 
            maxLength: {
              value: 64,
              message: "Password length cannot exceed 64 characters"
            }

          })}/>
        <div style={{height: 32}}>
        {errors?.password && <p>{ errors?.password.message || "Errors!" }</p>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default AuthForm
