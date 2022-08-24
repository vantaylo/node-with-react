import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

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
                return (
                    [
                    <li id="paymentContainer" ><Payment/></li>,
                    <li id="logoutBtnContainer"><a href='/api/logout'>Logout</a></li>
                ]
                );
        }
    }

    render() {
        return (
        <nav>
            <div className="nav-wrapper">
                <Link 
                className="left brand-logo" 
                to={this.props.auth ? '/surveys' : '/'}
                > Logo 
                </Link>
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