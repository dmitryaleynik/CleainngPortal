import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import SignInForm from './SignInForm/index';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-container">
                <h2>Sign In</h2>
                <SignInForm handleSubmit={this.handleSubmit}/>
            </div>

        )
    }

    handleSubmit = (email, password) => {
        (email + ' ' + password);
        (this.props.authorize);
        this.props.authorize(email, password);    
    }
}

export default SignIn;


