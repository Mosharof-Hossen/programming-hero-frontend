import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./package.css"
const Packages = () => {
    return (
        <div className='d-flex package'>
            <Card style={{ width: '18rem' }} className='m-5'>
                <Card.Img variant="top" src="https://st.depositphotos.com/1745525/4042/v/950/depositphotos_40421201-stock-illustration-sport-bike-rider.jpg" />
                <Card.Body>
                    <Card.Title>Bike Driving Lesson</Card.Title>
                    <Card.Text>
                        <p className='text-primary'>100 $</p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to="/package/payment/bike"><Button variant="primary">Join</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='m-5'>
                <Card.Img variant="top" src="https://www.horrycountyschools.net/cms/lib/SC02209139/Centricity/Domain/4373/car.png" />
                <Card.Body>
                    <Card.Title>Car Driving Lesson</Card.Title>
                    <Card.Text>
                        <p className='text-primary'>200 $</p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to="/package/payment/car"><Button variant="primary">Join</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Packages;
