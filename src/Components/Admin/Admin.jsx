import React, { useEffect } from 'react';
import { useState } from 'react';
import { admin } from '../../api/api.auth';
import { Table } from "react-bootstrap"
import User from './User';
import { Link } from 'react-router-dom';
const Admin = () => {
    let [alluser, setalluser] = useState([])
    useEffect(() => {
        admin()
            .then(res => setalluser(res.data))
    }, []);

    return (
        <div className=' container p-5'>
            <Link to="/home"> <button className='btn btn-primary my-2'>Home</button></Link>
            <h1>Admin Panel</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>email</th>
                        <th>address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map(user => <User key={user.name} user={user}></User>)
                    }


                </tbody>
            </Table>
        </div>
    );
}

export default Admin;
