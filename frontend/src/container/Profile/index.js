import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Profile() {
  return (
    <>
    <Navbar />
    <div className='container border border-dark rounded w-50 bg-light'>
      <h1 className='text-center display-5 mt-3'>Upload File</h1>
      <div class="mb-3">
        <label for="formFile" class="form-label">Upload JSON File</label>
        <input class="form-control" type="file" id="formFile"/>
        <button className='btn btn-primary my-3'>Upload</button>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Profile
