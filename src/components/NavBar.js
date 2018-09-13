import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clear } from "redux-localstorage-simple";

const MainNav = styled.nav`
  border-bottom: 3px solid black;
  grid-column: ${props => (props.position === "landing" ? "1 / -1" : "")};
  grid-row: ${props => (props.position === "landing" ? "1 / 2" : "")};
  font-size: ${props => (props.position === "landing" ? "2.5rem" : "2rem")};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  min-height: 7%;
  h1 {
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
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

class NavBar extends Component {
  handleLogOut = () => {
    this.props.dispatch(logoutUser());
    clear();
  };

  render() {
    return (
      <MainNav position={this.props.position}>
        <h1>Appl.io</h1>
        {this.props.btnPresent === true && (
          <BtnContainer>
            <NavBtn>
              <Link to="/dashboard/add-card">Add A Card</Link>
            </NavBtn>
            <NavBtn>
              <Link to="#" onClick={this.handleLogOut}>
                Log Out
              </Link>
            </NavBtn>
          </BtnContainer>
        )}
      </MainNav>
    );
  }
}

export default connect()(NavBar);
