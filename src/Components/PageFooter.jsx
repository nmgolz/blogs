import React from 'react'
import { Link } from 'react-router-dom'

function PageFooter() {
  return (
    <div className='conainter-fluid bg-light fixed-bottom py-4'>
        <div className='row'>
            <div className='col-lg text-center'>
                <Link to='connect' className='btn'>Connect</Link><br></br><br></br>
                <p className='mb-0'><Link to='/' className='btn'>About</Link></p><br></br>
                <p className='align-middle text-black'>Copywrite 2016.</p>
            </div>
            <div className='col text-center'>
            </div>
            <div className='col text-center'>

            </div>
        </div>
    </div>
  )
}

export default PageFooter