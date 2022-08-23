import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
    renderLoginLogoutButton() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google'>Login with Google</a></li>
                );
            default:
                return (<li><a>Logout</a></li>);
        }
    }

    render() {
        return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo"> Logo </a>
                <ul className="right">
                    {this.renderLoginLogoutButton()}
                </ul>
            </div>
        </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);