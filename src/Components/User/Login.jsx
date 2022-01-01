import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { login, signup } from '../../api/api.auth';
import { authenticate, isAuthenticated } from '../../utils/auth';
import { showError, showLoading } from '../../utils/message';

const Login = (props) => {
    let histoty = useHistory()
    if (isAuthenticated()) {
        histoty.push("/profile")
    }
    const [message, setMessage] = useState({
        error: false,
        loading: false,
        disabled: false,
        success: false
    })
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setMessage({
            error: false,
            loading: true,
            disabled: true,
            success: false
        })

        login(values)
            .then(response => {
                console.log(response.data.user.role);

                authenticate(response.data.user, () => {

                })
                setMessage({
                    error: false,
                    loading: false,
                    disabled: false,
                    success: response.data.message
                })
            })
            .catch(err => {
                let msg = "Server Problem"
                if (err.response) {
                    msg = err.response.data
                    console.log(msg);

                }
                setMessage({
                    error: msg,
                    loading: false,
                    disabled: false,
                    success: false
                })
            })

    }

    let loginForm = () => {
        return (
            <Form className="p-3" onSubmit={handleSubmit}>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" name="email" value={values.email} onChange={e => handleChange(e)} placeholder="Your Email" required />
                    </Col>
                </Form.Group>



                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" name="password" value={values.password} onChange={e => handleChange(e)} placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="">
                    </Form.Label>
                    <Col sm="10">
                        <button className="btn btn-primary" disabled={values.disabled}>Login</button>
                    </Col>
                </Form.Group>
                <p>I have no account ! <Link to='/register'>Create Account</Link></p>
            </Form>
        )
    }
    return (
        <div className='container p-5'>
            <Link to="/home"> <button className='btn btn-primary'>Home</button></Link>
            <h1>Login</h1>
            {showLoading(message.loading)}
            {showError(message.error, message.error)}
            {loginForm()}
        </div>
    );
}

export default Login;
