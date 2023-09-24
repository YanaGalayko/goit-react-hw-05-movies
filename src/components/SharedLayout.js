import { Suspense } from 'react';
import { Outlet } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { HeaderContainer, HeaderLink } from "./HeaderStyle"
import Loader from './Loader/Loader';

export const SharedLayout = () => {
    return (
 <>
   <HeaderContainer>
      <nav>
       <HeaderLink to='/'>Home</HeaderLink>
       <HeaderLink to='/movies'>Movies</HeaderLink>
      </nav>
    </HeaderContainer>
    <main>
    <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <GlobalStyle/>
</>
)
}


