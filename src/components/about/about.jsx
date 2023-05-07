import React from 'react';
export function About() {
    return (
        <>
            <div className='about' id='Nosotros'>
               
                <div className="mb-5">
                <h2>Nosotros</h2>
                <div className="underline-title mb-5"></div>
          </div>
                <section className="our-features">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <img
                                    src="https://via.placeholder.com/400x400"
                                    alt="Our features"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-7" style={{height:'400px'}}>
                                {/* <h3>Our Features</h3> */}
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nobis inventore molestias nemo dolorem, deleniti perspiciatis
                                    quae impedit necessitatibus, itaque delectus voluptate atque maxime tempora ratione nesciunt laborum, voluptatibus facere.</p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle-fill"></i>Feature 1
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill"></i>Feature 2
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill"></i>Feature 3
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill"></i>Feature 4
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill"></i>Feature 5
                                    </li>
                                </ul>
                               {/*  <a href="#" className="btn btn-primary">
                                    Learn More
                                </a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    );
};