import React from 'react';
import FormErrors from '../../FormErrors/index'

class SignUpClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            emailValid: false,
            passwordValid: false,
            confirmValid: false,
            formValid: false,
            formErrors: { email: '', password: '', confirmPassword: '' }
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
                    <label >
                        Confirm password
                        <input onChange={this.handleInput} value={this.state.confirmPassword} className="form-control" type="text" name="confirmPassword"></input>
                    </label>
                    <FormErrors formErrors={{confirmPassword: this.state.formErrors.confirmPassword}} />
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
        let {formErrors, emailValid, passwordValid, confirmValid} = this.state;
    
        switch (fieldName) {
            case 'email':
                emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
                formErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                formErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'confirmPassword':
                confirmValid =  value.length >=6 && value === this.state.password;
                formErrors.confirmPassword = confirmValid ? '' : 'is wrong';
            default:
                break;
        }
        this.setState({
            formErrors: formErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmValid: confirmValid
        }, () => this.validateForm());
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmValid
        });
    }
}

export default SignUpClientForm;


