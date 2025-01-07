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
        <div className='flex flex-col gap-3 m-auto item-start p-8 min-w-[340px] sm-min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
          <p className='text-2xl font-semibold '>{state == 'Sign Up' ? "Create Account" : 'Login'}</p>

          <p>Please {state == 'Sign Up' ? "Sign Up" : 'Log in'}  to book appointment</p>

          <div className='w-full'>
            <p>Full Name</p>
            <input type="text" required value={name} placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} />

          </div>


          <div className='w-full'>
            <p>Email</p>
            <input type="email" required value={name} placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='w-full'>
            <p>Password</p>
            <input type="Password" required value={name} placeholder='Enter Password ' onChange={(e) => setPassword(e.target.value)} />

          </div>

          <button className='text-start'>{state == 'Sign Up' ? "Create Account" : 'Login'}</button>
        </div>

      </form>
    </>
  )
}

export default Login
