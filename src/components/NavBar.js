import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clear } from "redux-localstorage-simple";
import HamburgerMenu from "react-hamburger-menu";

const MainNav = styled.nav`
  border-bottom: 3px solid black;
  grid-area: nav;
  font-size: ${props => (props.position === "landing" ? "2.2rem" : "2.2rem")};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: ${props => (props.mobilenavopen === true ? "25vh" : "10vh")};
  transition: all 0.4s ease;
  padding: 10px 0;

  h1 {
    margin: 0;
    padding: 15px;
    color: black;
    align-self: ${props => (props.mobilenavopen === true ? "baseline" : "")};
  }
  a:visited {
    color: black;
  }

  @media screen and (max-width: 1050px) {
    font-size: 2rem;
  }

  @media screen and (max-height: 500px) {
    h1 {
      font-size: 2.5rem;
    }
    padding: 10px 0;
    height: ${props => (props.mobilenavopen === true ? "65vh" : "15vh")};
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2.2rem;
    }
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
  @media screen and (max-width: 1050px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 780px) {
    font-size: 1.5rem;
  }
`;

const MobileNavContainer = styled.div`
  display: ${props => (props.mobilenavopen === true ? "flex" : "none")};
  flex: 1 1 750px;
  flex-direction: row;
  padding: 15px;
  width: 100%;
  border-top: 3px solid black;
  justify-content: space-around;
  border-top: 2px solid black;
  align-items: center;
  align-self: ${props => (props.mobilenavopen === true ? "flex-end" : "auto")};

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;

const HamburgerSpan = styled.span`
  padding: 15px;
  align-self: ${props =>
    props.mobilenavopen === true ? "flex-start" : "auto"};
`;

const MobileNavBtn = styled.button`
  margin: 5px 0;
  border: 1px solid black;
  padding: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-size: 2rem;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    padding: 2px;
  }
`;

class NavBar extends Component {
  state = {
    windowSize: window.innerWidth
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  componentWillUnmount = () => {
    window.addEventListener("resize", null);
  };

  handleResize = () => {
    this.setState(() => ({
      windowSize: window.innerWidth
    }));
  };

  handleLogOut = () => {
    this.props.dispatch(logoutUser());
    clear();
  };

  render() {
    if (this.state.windowSize < 750 && this.props.btnPresent === true) {
      return (
        <MainNav
          position={this.props.position}
          mobilenavopen={this.props.mobilenavopen}
        >
          <h1 className="logo" mobilenavopen={this.props.mobilenavopen}>
            <Link to="/" style={{ textDecoration: "none" }}>
              Appl.io
            </Link>
          </h1>
          <HamburgerSpan mobilenavopen={this.props.mobilenavopen}>
            <HamburgerMenu
              isOpen={this.props.mobilenavopen}
              menuClicked={this.props.handleClick}
              width={20}
              height={18}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </HamburgerSpan>

          <MobileNavContainer mobilenavopen={this.props.mobilenavopen}>
            <MobileNavBtn onClick={this.props.handleClick}>
              {this.props.router.location.pathname ===
              "/dashboard/statistics" ? (
                <Link to="/dashboard">Dashboard</Link>
              ) : (
                <Link to="/dashboard/statistics">Statistics</Link>
              )}
            </MobileNavBtn>
            <Link to="/dashboard/add-card">
              <MobileNavBtn onClick={this.props.handleClick}>
                Add A Card
              </MobileNavBtn>
            </Link>
            <Link to="#" onClick={this.handleLogOut}>
              {" "}
              <MobileNavBtn onClick={this.props.handleClick}>
                Log Out
              </MobileNavBtn>
            </Link>
          </MobileNavContainer>
        </MainNav>
      );
    } else {
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
}

const mapStateToProps = ({ router }) => ({
  router
});

export default connect(mapStateToProps)(NavBar);
