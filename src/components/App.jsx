import { lazy } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

// import HomePage from "pages/HomePage";
// import MoviesDetailsPage from "pages/MoviesDetailsPage";
// import MoviesPage from "pages/MoviesPage"
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";


const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="movies" element={<MoviesPage />}/>
        <Route path='movies/:movieId' element={<MoviesDetailsPage/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/" />}/>
        </Route>
      </Routes>
    </div>
     
      

  );
};
