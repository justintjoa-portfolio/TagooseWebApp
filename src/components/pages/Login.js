import React from 'react';
import LoginForm from "../forms/LoginForm";
//import { Link } from "react-router-dom"
class Login extends React.Component {

    submit = data => {
        console.log(data);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>

                <LoginForm submit= 
                    {
                        this.submit
                    }
                />
            </div>
        );
    }
}


export default Login