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
        <div>
          <p>{state == 'Sign Up' ? "Create Account" : 'Login'}</p>

          <p>Please {state == 'Sign Up' ? "Sign Up" : 'Log in'}  to book appointment</p>

          <div>
            <p>Full Name</p>
            <input type="text" required value={name} placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} />

          </div>


          <div>
            <p>Email</p>
            <input type="email" required value={name} placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <p>Password</p>
            <input type="Password" required value={name} placeholder='Enter Password ' onChange={(e) => setPassword(e.target.value)} />

          </div>

        </div>

      </form>
    </>
  )
}

export default Login
