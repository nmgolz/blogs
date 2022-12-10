import React from 'react'
import { Link } from "react-router-dom";

function ConnectPage() {
  return (
    <div className='text-center containter-fluid bottom-margin-lg'>
        <h1 className='bg-info'>Connect With Us</h1>
        <div className='row container'>
            <div className='col-sm mt-2 mb-5'>
                <h3>We welcome your feed back!</h3>
                <p>We hope you like what we have to say. We are open to suggestions, critques, and corrections! </p>
            </div>
            <div className='col-sm ms-3'>
                <form>
                    <p className='mb-1 mt-2 d-flex justify-content-start'>Email</p>
                    <input 
                        className='form-control' 
                        type='text' 
                        placeholder="Email">
                    </input>
                    <p className='mb-1 mt-2 d-flex justify-content-start'>Whats Up?</p>
                    <textarea  
                        type='text' 
                        className='form-control mb-2' 
                        rows="4" 
                        placeholder='Write an Email Here!'>
                    </textarea>
                    <button 
                        className='btn btn-outline-info text-dark mx-0 mt-2 d-flex justify-content-start' 
                        ><Link className='nav-link' to={'asdf'}>Submit</Link></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConnectPage