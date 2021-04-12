import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
            <div className='container-fluid'>
               <Link className='navbar-brand' to='/'>
                  Angular
               </Link>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon'></span>
               </button>
            </div>
         </nav>
      </>
   );
};

export default Header;
