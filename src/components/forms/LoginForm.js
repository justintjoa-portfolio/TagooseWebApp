import React from 'react';
//javascript and react get data from onsubmit
//import PropTypes from 'prop-types'
import { Form, Button, Message} from "semantic-ui-react";
import Validator from 'validator';




class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}

    }




    onChange = e => 
        this.setState(
            {
                data: {
                    ...this.state.data, [e.target.name]: e.target.value
                }
            }
        );

    onSubmit = () => {
        console.log("submitting")
        var email = this.state.data.email
        var password = this.state.data.password
        console.log("the email is" + email)
        console.log("The password is" + password)
        const errors = this.validate(this.state.data);
        this.setState(
            {
                errors
            }
        );
        if (Object.keys(errors).length === 0) {
            this.setState(
                {
                    loading: true
                }
            );
            /*
            this.props.submit(this.state.data).catch(err=>
                this.setState( 
                    {
                        errors: err.response.data.errors, loading: false
                    }
                )    
            );
            */
        }
    };


    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) {
            errors.email = "Invalid email";
        }
        if (!data.password) {
            errors.password = "Can't be blank!";
        }
        return errors;
    }
    render() {
        const {data, errors, loading} = this.state;
        return (
            <Form onSubmit={
                this.onSubmit
            } loading={loading}>
            {errors.global && <Message negative>
                <Message.Header>
                    Something went wrong
                </Message.Header>
                <p>{errors.global}</p>
            </Message>}
                <Form.Field error={
                    !!errors.email
                }>
                    <label 
                        htmlFor="email">Email
                    </label>
                    <input 
                        type="email" 
                        id = "email" 
                        name="email" 
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field error={
                    !!errors.password
                }>
                    <label 
                        htmlFor="password">Password
                    </label>
                    <input 
                        type="password" 
                        id = "password" 
                        name="password" 
                        placeholder="Make it secure!"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary onClick={this.handleLogin}>
                    Login
                </Button>
            </Form>
        );
        
    
    }
    handleLogin() {
        console.log("great!");
        console.log(this.state)
        /*
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          */
    }
    
    

}



export default LoginForm