import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const footer = () => {
  return (
    <footer className='bg-dark text-white mt-4 p-4 text-center'>
      &copy; {new Date().getFullYear()} Lerdempp. That's it.
    </footer>
  )
}

export default footer