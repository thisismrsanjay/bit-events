import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    //this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="navbar-brand" to="/">
              <img
                src="assets/logo.png"
                width="30"
                height="30"
                alt=""
                className="d-inline-block align-top mr-2"
              />
              Bit-Events
            </Link>

            <div className="navbar-nav">
              <NavLink
                className="nav-item nav-link "
                activeClassName="active"
                to="/events"
              >
                Events
              </NavLink>
            </div>
            {authenticated && (
              <div className="navbar-nav">
                <NavLink
                  className="nav-item nav-link "
                  activeClassName="active"
                  to="/people"
                >
                  People
                </NavLink>
              </div>
            )}

            {authenticated && (
              <Link
                type="button"
                to="/createEvent"
                className="btn btn-outline-success "
              >
                Create Event
              </Link>
            )}

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {authenticated ? (
                  <SignedInMenu signOut={this.handleSignOut} />
                ) : (
                  <SignedOutMenu signIn={this.handleSignIn} />
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
//history @ 47 in navbar we don't have props.history as NavBar is not in route
export default withRouter(NavBar);
