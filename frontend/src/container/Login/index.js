import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
    <Navbar />
    <div className='container border border-dark rounded w-50 bg-light'>
    <form>
      <h1 className='display-5 mt-3 text-center'>Login</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-primary my-3">LogIn</button>
    </form>
    <div className="mt-auto text-dark-50 text-center">
        <p>Create Account? <Link to={'/signup'} className="text-dark">Signup</Link></p>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Login
