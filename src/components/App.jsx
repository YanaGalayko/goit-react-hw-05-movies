
import HomePage from "pages/HomePage";
import MoviesDetailsPage from "pages/MoviesDetailsPage";
import MoviesPage from "pages/MoviesPage"
import { Link, Route, Routes } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";

export const App = () => {
  return (
    <div>
      <header>
      <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        </ul>
      </nav>
      </header>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/movies'element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MoviesDetailsPage/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          </Route>
      </Routes>
    </div>
  );
};
