import React from 'react'
import GoogleAuth from  './GoogleAuth'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Streamy
        </Link>
        <div className="right menu">
            <Link to="/" className="item">
              All Streams
        </Link>
        <GoogleAuth/>
        </div>
        </div>)
}

export default Header;


//326340100943-09fig1f5p7it5ju6q6oasnk4meg85j0m.apps.googleusercontent.com