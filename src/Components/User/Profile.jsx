import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, userInfo } from '../../utils/auth';

const Profile = () => {

    return (
        <div className='container p-5'>
            <Link to="/home"> <button className='btn btn-primary'>Home</button></Link>
            <h4>Profile picture</h4>
            <img src={userInfo()?.profilePic} alt="" />
            <h4>Name : {userInfo()?.name}</h4>
            <h4>Age: {userInfo()?.age}</h4>
            <h4>Phone : {userInfo()?.phone}</h4>
            <h4>Area : {userInfo()?.area}</h4>
            <h4>Driving Licence </h4>
            <img src={userInfo()?.drivingLicence} alt="" />
            <h4>Car Information : {userInfo()?.carInfo}</h4>
            <h4>NID</h4>
            <img src={userInfo()?.nidPic} alt="" />
        </div>
    );
}

export default Profile;
