import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContributors } from '../redux/actions';

const Contributors = (props) => {
   const { getContributors } = props;
   // useEffect(() => {
   //    getContributors();
   // }, []);
   return (
      <>
         <div class='container-fluid search'>
            <Link to='/contributor'>contributor</Link>

            <div className='container search'>
               <form class='form-inline mx-auto'>
                  <input
                     class='form-control mx-auto'
                     type='search'
                     placeholder='Search'
                     aria-label='Search'
                  />
               </form>
               <div class='dropdown text-center'>
                  <a
                     class='dropdown-toggle'
                     href='#'
                     id='Dropdown'
                     role='button'
                     data-toggle='dropdown'
                     aria-haspopup='true'
                     aria-expanded='false'
                  >
                     Filters
                  </a>
                  <div class='dropdown-menu' aria-labelledby='Dropdown'>
                     <a class='dropdown-item' href='#'>
                        Ascending
                     </a>
                     <a class='dropdown-item' href='#'>
                        Descending
                     </a>
                  </div>
               </div>
               <div class='results'>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <div class='box'>
                     <div class='image'>
                        <img src='' alt='' />
                     </div>
                     <p class='name'>Malik Johnson</p>
                     <div class='social'>
                        <span class='red'>
                           <i class='far fa-heart'></i>&nbsp;2.1k
                        </span>
                        <span class='blue'>
                           <i class='fab fa-telegram-plane'></i>&nbsp;15
                        </span>
                        <span class='green'>
                           <i class='fas fa-user'></i>&nbsp;731
                        </span>
                     </div>
                     <a href='#' class='button'>
                        Connect
                     </a>
                  </div>
                  <nav aria-label='Page navigation' class='navigation'>
                     <ul class='pagination'>
                        <li class='page-item'>
                           <a class='page-link' href='#'>
                              1
                           </a>
                        </li>
                        <li class='page-item'>
                           <a class='page-link' href='#'>
                              2
                           </a>
                        </li>
                        <li class='page-item'>
                           <a class='page-link' href='#'>
                              3
                           </a>
                        </li>
                        <li class='page-item'>
                           <a class='page-link' href='#'>
                              4
                           </a>
                        </li>
                        <li class='page-item'>
                           <a class='page-link' href='#'>
                              5
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </>
   );
};

export default connect(null, { getContributors })(Contributors);
