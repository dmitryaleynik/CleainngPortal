import React from 'react';
import FormErrors from '../../FormErrors/index'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            formErrors: { email: '', password: '' }
        }
    }

    render() {
        return (
            <form className="form">
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                        <input onChange={this.handleInput} value={this.state.email} className="form-control" type="text" name="email"></input>
                    </label>
                    <FormErrors formErrors={{email: this.state.formErrors.email}} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Password
                        <input onChange={this.handleInput} value={this.state.password} className="form-control" type="text" name="password"></input>
                    </label>
                    <FormErrors formErrors={{password: this.state.formErrors.password}}/>
                </div>

                <div className="form-group">
                    <button disabled={!this.state.formValid} className="btn btn-primary" type="submit"> Sign In</button>
                </div>
            </form>
        )
    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value}, () => this.validateField(name, value));
    }

    validateField(fieldName, value) {
        let {formErrors, emailValid, passwordValid} = this.state;
    
        switch (fieldName) {
            case 'email':
                emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
                formErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                formErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: formErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, () => this.validateForm());
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }
}

export default SignInForm;


