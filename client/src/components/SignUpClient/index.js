import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import SignUpClientForm from './SignUpClientForm/index';

class SignUpClient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-container">
                <h2>Sign Up</h2>
                <SignUpClientForm />
            </div>

        )
    }
}

export default SignUpClient;


