import React, { Component } from 'react';
import ApiSecurity from '../api/Security';

class FormRegister extends Component{

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleValidRepeatedPassword = this.handleValidRepeatedPassword.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleValidRepeatedPassword(e) {
        const { password, confirmPassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            // make API call
        }
    }

    handleSubmitForm(e) {
        e.preventDefault();
        const newUser = {
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            email: this.state.email,
            password: this.state.password
        };
        var x = ApiSecurity.register(newUser);
        console.log(x);
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmitForm}>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="r-lastname">Nom</label>
                            <input type="text"
                                   className="form-control"
                                   name="lastname"
                                   id="r-lastname"
                                   value={this.state.lastname}
                                   onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="r-firstname">Prenom</label>
                            <input type="text"
                                   className="form-control"
                                   name="firstname"
                                   id="r-firstname"
                                   value={this.state.firstname}
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-email">Email</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               id="r-email"
                               value={this.state.email}
                               onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-password">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               id="r-password"
                               value={this.state.password}
                               onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Envoyer</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default FormRegister;