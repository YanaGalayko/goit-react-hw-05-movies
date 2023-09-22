import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const List = styled.li`
margin-bottom: 10px;
font-size: 18px;
font-weight: 400;
color: white;
`;

export const MovieLink = styled(NavLink)`

&.active {
    color: orange;
}

`;
