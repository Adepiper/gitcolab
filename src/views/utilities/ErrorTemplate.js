import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ErrorTemplate = (props) => {
   return (
      <>
         <div className='container text-center'>
            <div
               className='alert alert-warning alert-dismissible m-4 text-center fade show'
               role='alert'
            >
               <p>{props.errorMessage}</p>
               <Link to='/'>Reload Page</Link>
               <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-label='Close'
               >
                  <span aria-hidden='true'>&times;</span>
               </button>
            </div>
         </div>
      </>
   );
};

const mapStateToProps = (state) => ({
   errorMessage: state.contributors.error,
});

export default connect(mapStateToProps, {})(ErrorTemplate);
