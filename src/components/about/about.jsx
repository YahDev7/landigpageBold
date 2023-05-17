import React from 'react';
export function About() {
    return (
        <>
            <div className='about' id='Nosotros' data-aos="fade-right"  data-aos-easing="linear"
    data-aos-duration="1500">
               
                <div className="mb-5">
                <h2>Nosotros</h2>
                <div className="underline-title mb-5"></div>
          </div>
                <section className="our-features">
                    <div className="container">
                        <div className="row align-items-center" >
                            <div className="col-md-4">
                                <img
                                    src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683938800/BOLDSTRATEGY/Static/img_vhitxr.jpg"
                                    alt="Our features"
                                    className=""style={{width:'100%'}}
                                />
                            </div>
                            <div className="col-md-7" style={{height:'400px'}}>
                                {/* <h3>Our Features</h3> */}
                                <p>Somos una Agencia de Marketing que contamos con años de experiencia, nos encargamos de promocionar tus productos y/o servicios. 
                                   </p>
                                    <p> Nuestro equipo de expertos está altamente capacitado. 
                                    Nos esforzamos en comprender las necesidades de nuestros clientes y trabajar en estrecha colaboración con ellos para desarrollar soluciones personalizadas que se adapten a sus objetivos y presupuesto. 
                                     </p>

                                     <p>Utilizamos las últimas tecnologías y técnicas de marketing para ayudar a las empresas a aumentar su presencia en línea y llegar a su público objetivo de manera efectiva. 
                                    Si está buscando una agencia de marketing confiable y efectiva para ayudar a impulsar su negocio, ¡No dude en ponerse en contacto con nosotros! Estamos aquí para ayudarlo a alcanzar sus objetivos de marketing y aumentar su éxito comercial. 
                               </p>
                                
                              {  /* 
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
                                </ul> */}
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