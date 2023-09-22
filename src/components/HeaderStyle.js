import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const HeaderContainer = styled.div`
padding: 25px 25px;
background: #008080;
margin: 10px;
border: 2px solid black;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const HeaderLink = styled(NavLink)`
font-size: 28px;
font-weight: 600;
margin-left: 30px;
color: white;

&.active {
    color: orange;
}
`;