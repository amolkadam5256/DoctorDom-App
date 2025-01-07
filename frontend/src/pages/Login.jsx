import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form action="" className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto item-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
          <p className='text-2xl font-semibold '>{state == 'Sign Up' ? "Create Account" : 'Login'}</p>

          <p>Please {state == 'Sign Up' ? "Sign Up" : 'Log in'}  to book appointment</p>

          {
            state === "Sign Up" && <div className='w-full'>
              <p>Full Name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name' required value={name} />

            </div>
          }

          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" onChange={(e) => setEmail(e.target.value)} required value={email} placeholder='Enter Email Address' />
          </div>

          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange={(e) => setPassword(e.target.value)} required value={password} placeholder='Enter Password ' />

          </div>

          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state == 'Sign Up' ? "Create Account" : 'Login'}</button>

          {
            state === "Sign Up"
              ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer text-lg'>Login here</span></p>
              : <p>Create an New account?   <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer text-lg'>Click here</span></p>
          }
        </div>

      </form>
    </>
  )
}

export default Login
