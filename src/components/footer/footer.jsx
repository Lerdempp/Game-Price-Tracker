import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer bg-dark text-white p-4 text-center'>
      &copy; {new Date().getFullYear()} Lerdempp. That's it.
    </footer>
  );
}

export default Footer;
