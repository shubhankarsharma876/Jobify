import React from 'react'
import Header from './Header'
import About from './About'
import Partners from './Partners'
import Contact from './Contact'
import JobForm from './JobForm'
function Root() {
  return (
    <div className='py-0'>
    <Header/>
    <About/>
    <Partners/>
    <JobForm/>
    <Contact/>
    </div>
  )
}

export default Root