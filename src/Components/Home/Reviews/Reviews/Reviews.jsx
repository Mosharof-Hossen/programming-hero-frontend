import React, { useEffect, useState } from 'react';
import ReDetails from '../ReDetails/ReDetails';
import reviews from "./ReviewData"

const Reviews = () => {
    const [review, setReview] = useState(reviews)


    return (
        <section className="testimonials mt-5 ">
            <div className="container ">
                <div className="section-header ml-5 text-center">
                    <h5 className="text-primary text-uppercase" style={{ color: "#3A4256", fontWeight: "bold" }}>Reviews</h5>
                    <h1 style={{ color: "#3A4256", fontWeight: "bold" }} >What Our Customers  <br /> Says!!</h1>
                </div>
                <div>
                    <div className=" d-flex justify-content-around flex-wrap" style={{ width: "100%" }}>
                        {
                            review.map(data => <ReDetails key={data.name} data={data}></ReDetails>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Reviews;