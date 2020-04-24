import React from 'react';
//import PropTypes from "prop-types";
//import {connect} from "react-redux";
import LoginForm from "../forms/LoginForm";


//import { Link } from "react-router-dom"
class Login extends React.Component {

    //submit = data => this.props.login(data).then(() => this.props.history.push("/"));

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