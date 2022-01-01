import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { signup } from '../../api/api.auth';
import { showError, showLoading } from '../../utils/message';

const Register = () => {
    const [message, setMessage] = useState({
        error: false,
        loading: false,
        disabled: false,
        success: false
    })

    const [values, setValues] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
        phone: "",
        drivingLicence: "",
        area: "",
        nidPic: "",
        profilePic: "",
        carInfo: "",
        password: "",
        role: "rider"
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

        signup(values)
            .then(response => {
                console.log(response.data);
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
                    ...values,
                    error: msg,
                    loading: false,
                    disabled: false,
                    success: false
                })
            })

    }


    let signUpForm = () => {
        return (
            <Form className="p-3" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="name" value={values.name} onChange={e => handleChange(e)} placeholder="Your name" required />
                    </Col>
                </Form.Group>

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
                        Age
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="age" value={values.age} onChange={e => handleChange(e)} placeholder="Your Age" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="address" value={values.address} onChange={e => handleChange(e)} placeholder="Your Address" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="phone" value={values.phone} onChange={e => handleChange(e)} placeholder="Your Phone" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Driving Licence URL
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="drivingLicence" value={values.drivingLicence} onChange={e => handleChange(e)} placeholder="Your Driving Licence URL" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Area
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="area" value={values.area} onChange={e => handleChange(e)} placeholder="Your area" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Nid Picture URL
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="nidPic" value={values.nidPic} onChange={e => handleChange(e)} placeholder="Your Nid Picture URL" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Profile Picture URL
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="profilePic" value={values.profilePic} onChange={e => handleChange(e)} placeholder="Your Profile Picture URL" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Car Information
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="carInfo" value={values.carInfo} onChange={e => handleChange(e)} placeholder="Car Information" required />
                    </Col>
                </Form.Group>


                <div className="form-group my-3">
                    <label className="text-muted">Categoty:</label>
                    <select name="role" value={values.role} onChange={handleChange} className="form-control" required id="">
                        <option value="rider">Rider</option>
                        <option value="learner">Learner</option>


                    </select>
                </div>


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
                        <button className="btn btn-primary" disabled={values.disabled}>Create Account</button>
                    </Col>
                </Form.Group>
                <p>have a account ? <Link to='/login'>Login</Link></p>
            </Form>
        )
    }
    return (
        <div className='container p-5'>
            <Link to="/home"> <button className='btn btn-primary'>Home</button></Link>
            <h1>Resister form</h1>
            {showLoading(message.loading)}
            {showError(message.error, message.error)}
            {signUpForm()}
        </div>
    );
}

export default Register;
