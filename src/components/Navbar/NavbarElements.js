import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";



export const NavLink = styled(Link)`
 font-family: Zen Loop;
  color: #1F1F1F;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 1.5vw;
 text-align: center;
  padding: 2px;
  background: none;
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
`;
