import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import * as yup from 'yup';
import Toast from '../../components/Toast';
import axios from 'axios';


let schema = yup.object().shape({
  Name: yup.string().required(),
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
});

function Signup({history}) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const submitHandler = (name, email, password) => {
    schema.validate({name, email, password},{abortEarly:false})
    .then( async data => {
      setMessage('');
      //making  api  call
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/signup',
        data
      });
      console.log(data)

      if(Object.values(response.data.error).length) {
        setMessage(response.data.message);
      } else {
        console.log(history)
      }

    })
    .catch( err => {
      const errorMessage = err.errors ? err.errors[0] : err.message
      setMessage(errorMessage);
    });
  }

  return (
    <>
    <Navbar />
    <div className='container border border-dark rounded bg-light w-50'>
    <form>
    <Toast message={message} />
      <h1 className='display-5 mt-3 text-center'>Signup</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary my-3"
      onClick={()=>submitHandler(name, email, password)}
      >Signup</button>
    </form>
    <div className="mt-auto text-dark-50 text-center">
        <p>Already Account? <Link to={'/login'} className="text-dark">Login</Link></p>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup
