import React, { useState } from 'react';
import { isAuthenticated, userInfo } from '../../utils/auth';
import Achivement from './Achivement/Achivement';
import Footer from './Header/Footer/Footer';
import Header from './Header/Header';
import Packages from './packages/Packages';
import Reviews from './Reviews/Reviews/Reviews';

const Home = () => {
    // let [user, setUser] = useState({})
    // if (isAuthenticated) {
    //     setUser(userInfo().role)
    // }
    return (
        <div>
            <Header></Header>
            <Packages></Packages>

            <Reviews></Reviews>
            <Achivement></Achivement>
            <Footer></Footer>
        </div>
    );
}

export default Home;
