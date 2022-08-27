import styled from "styled-components";

const NavBarCont = styled.div(
  ({ openNavBar }) => `
  z-index:100;
  background-color: steelblue;
  width:${openNavBar ? "6rem" : "0"};
  height:100%;
  position:fixed;
  display:${openNavBar ? "flex" : 0};
  top:0;
  transition: width 0.3s ease-out;
  overflow: hidden;
  flex-direction:column;
`
);

const NavBarItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin-left: 1.5rem;
  margin-top: 15rem;
`;

const NavIcon = styled.span`
  font-size: 2rem;
  margin-left: 1.5rem;
  position: absolute;
  top: 1rem;
  cursor: pointer;
  z-index: 110;
  display: block !important;
`;

const NavCont = styled.div`
  position: fixed;
  height: 100vh;
`;

const BarItemUser = styled.div(
  ({ iconColor }) => `
margin-top:5rem;
cursor:pointer;
margin-left: 0.6rem;
color:${iconColor ? "white" : "black"};
:hover{
  color:white;
}
`
);
const BarItemAlbum = styled.div(
  ({ iconColor }) => `
margin-top:5rem;
cursor:pointer;
margin-left: 0.6rem;
color:${iconColor ? "white" : "unset"};
:hover{
  color:white;
}
`
);
export { NavBarCont, NavBarItems, NavIcon, NavCont, BarItemUser, BarItemAlbum };
