import React, { Component } from 'react';

import FormRegister from '../components/FormRegister'

class Register extends Component{
    render(){
        return (
            <React.Fragment>
                <p className="text-center">Hello from Register page</p>
                {/*Afficher un formulaire d'inscription*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-3 mx-auto">
                            <FormRegister/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register;