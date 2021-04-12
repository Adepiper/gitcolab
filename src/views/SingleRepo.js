import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepoDetails } from '../redux/actions/getRepoDetails';
import { loadingAction } from '../redux/actions/loading';
import ContributorsList from './ContributorsList';
import Loading from './utilities/Loading';

const SingleRepo = (props) => {
   const {
      contributor,
      loading,
      repoDetails,
      getRepoDetails,
      loadingAction,
      match,
   } = props;

   const { name, repo } = match.params;
   useEffect(() => {
      loadingAction();
      getRepoDetails(contributor.repos, repo, name);
   }, []);

   const singleRepoEl = () => (
      <>
         <div class='container-fluid angular-outline'>
            <div class='bg-darkblue'>
               <img src='/assets/Angular-1.png' alt='' />
               <div class='empty blue-bg'></div>
            </div>
         </div>
         <div class='container-fluid alvo'>
            <div class='alvo-info'>
               <div class='alvo-logo'>
                  <img src='/assets/Group.png' alt='' />
               </div>
               <h3 class='repo-name'>Alvo Repository</h3>
               <span class='date'>Apr 2021</span>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ab praesentium nesciunt aut molestiae quos ut
                  temporibus numquam odio adipisci dolorum ipsam, placeat at
                  dolorem soluta deleniti ullam ratione delectus?
               </p>
            </div>
            <div class='buttons'>
               <a href='#' class='button'>
                  Visit Site
               </a>
               <a href='#' class='button dark'>
                  Pin to Profile
               </a>
            </div>
         </div>
         <div class='container-fluid'>
            <hr />
            <h3 class='header'>Contributors</h3>
            <hr />
            <div className='results'>
               {repoDetails.contributors && (
                  <ContributorsList contributors={repoDetails.contributors} />
               )}
            </div>
         </div>
         <div class='container-fluid getting-started'>
            <hr />
            <h3 class='header'>Getting Started with Alvo</h3>
            <hr />
            <div class='content'>
               <h4>Starting a Project</h4>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  repellat corporis maiores natus, vel possimus saepe eos culpa,
                  doloribus placeat vero! Aliquid facilis suscipit iste, illo
                  eius, est a quae maxime voluptas hic dolore, saepe molestiae
                  accusantium quidem ipsa. Voluptatum quis mollitia qui ipsam
                  dolore, dolores iste molestias suscipit laborum, rem at soluta
                  exercitationem alias, quod eum. Ratione, alias a! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quos quo repellat
                  vel maiores autem voluptatibus expedita vero sapiente veniam
                  molestias, voluptatum ducimus incidunt, porro minus alias. Cum
                  libero voluptatum molestias. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Non suscipit delectus officia
                  dignissimos? Perferendis, incidunt. Eveniet, aut
                  exercitationem soluta labore nisi quibusdam sapiente non iure
                  veniam beatae, quo officia. Ut!
               </p>
               <div class='see-more'>
                  <a href='#' class='button'>
                     See more
                  </a>
               </div>
            </div>
         </div>
      </>
   );

   return <>{loading ? <Loading /> : singleRepoEl()}</>;
};

const mapStateToProps = (state) => ({
   contributor: state.contributors.contributor,
   loading: state.contributors.loading,
   repoDetails: state.contributors.repoDetails,
});

export default connect(mapStateToProps, { getRepoDetails, loadingAction })(
   SingleRepo
);
