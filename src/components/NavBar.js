import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clear } from "redux-localstorage-simple";

const MainNav = styled.nav`
  border-bottom: 3px solid black;
  grid-area: nav;
  font-size: ${props => (props.position === "landing" ? "2.2rem" : "2.2rem")};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 10vh;
  h1 {
    margin: 0;
    color: black;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 50%;
`;

const NavBtn = styled.button`
  border: 2px solid black;
  background-color: white;
  margin: 0 10px;
  cursor: pointer;
  font-size: 3rem;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 5px;

  :hover {
    transform: translateY(-5px);
    box-shadow: 10px 10px rgba(171, 183, 217, 0.8);
  }

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">Appl.io</h1>
        </Link>
        {this.props.btnPresent === true && (
          <BtnContainer>
            <NavBtn>
              {this.props.router.location.pathname ===
              "/dashboard/statistics" ? (
                <Link to="/dashboard">Dashboard</Link>
              ) : (
                <Link to="/dashboard/statistics">Statistics</Link>
              )}
            </NavBtn>
            <Link to="/dashboard/add-card">
              <NavBtn>Add A Card</NavBtn>
            </Link>
            <Link to="#" onClick={this.handleLogOut}>
              <NavBtn>Log Out</NavBtn>
            </Link>
          </BtnContainer>
        )}
        {this.props.aboutPresent === true && (
          <BtnContainer>
            <NavBtn>
              {this.props.router.location.pathname === "/" ||
              this.props.router.location.pathname === "/register" ? (
                <Link to="/about">About</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </NavBtn>
          </BtnContainer>
        )}
      </MainNav>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  router
});

export default connect(mapStateToProps)(NavBar);
