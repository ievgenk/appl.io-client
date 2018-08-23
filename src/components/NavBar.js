import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainNav = styled.nav`
  border-bottom: 3px solid black;
  grid-column: 1/-1;
  grid-row: 1 / 2;
  font-size: ${props => (props.landing ? "2.5rem" : "2rem")};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
`;

const NavBtn = styled.button`
  border: 2px solid black;
  background-color: white;
  margin: 0 10px;
  cursor: pointer;
  font-size: 3rem;

  a {
    color: black;
    text-decoration: none;
  }
`;

export default ({ btnPresent }) => {
  return (
    <MainNav>
      <h1>Appl.io</h1>
      {btnPresent === true && (
        <BtnContainer>
          <NavBtn>
            <Link to="/dashboard/add-card">Add A Card</Link>
          </NavBtn>
          <NavBtn>
            <Link to="#">Log Out</Link>
          </NavBtn>
        </BtnContainer>
      )}
    </MainNav>
  );
};
