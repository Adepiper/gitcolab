import React from 'react';

const Pagination = () => {
   return (
      <>
         <nav aria-label='Page navigation' className='navigation'>
            <ul className='pagination'>
               <li className='page-item'>
                  <a className='page-link' href='#'>
                     1
                  </a>
               </li>
               <li className='page-item'>
                  <a className='page-link' href='#'>
                     2
                  </a>
               </li>
               <li className='page-item'>
                  <a className='page-link' href='#'>
                     3
                  </a>
               </li>
               <li className='page-item'>
                  <a className='page-link' href='#'>
                     4
                  </a>
               </li>
               <li className='page-item'>
                  <a className='page-link' href='#'>
                     5
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Pagination;
