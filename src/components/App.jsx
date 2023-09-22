import HomePage from "pages/HomePage";
import MoviesDetailsPage from "pages/MoviesDetailsPage";
import MoviesPage from "pages/MoviesPage"
import { Route, Routes } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";
import { GlobalStyle } from "./GlobalStyle";
import { HeaderContainer, HeaderLink } from "./HeaderStyle";

export const App = () => {
  return (
    <div>
      <HeaderContainer>
      <nav>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='/movies'>Movies</HeaderLink>
      </nav>
      </HeaderContainer>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/movies'element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MoviesDetailsPage/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          </Route>
      </Routes>
      <GlobalStyle/>
    </div>
  );
};
