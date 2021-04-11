import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <nav class='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
            <div className='container-fluid'>
               <Link class='navbar-brand' to='/'>
                  Angular
               </Link>
               <button
                  class='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span class='navbar-toggler-icon'></span>
               </button>
            </div>
         </nav>
      </>
   );
};

export default Header;
