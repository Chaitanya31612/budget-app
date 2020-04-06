// hoc Higher Order COmponent which wrap smaller components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: {props.info}</p>
  </div>  
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        <p><i>This is privilaged don't share</i></p>
        <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!!props.isAuthenticated && <WrappedComponent {...props}/>}
               
        </div>  
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo info='This is it' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='This is it' />, document.getElementById('app'));