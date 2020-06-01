import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title">
                    <h1>Budget App</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>  
);

const mapsDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()) 
});

export default connect(undefined, mapsDispatchToProps)(Header);