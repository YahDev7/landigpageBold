import React, { useState } from "react";
import { Video } from "../../video";

export function Banner() {
  const [openvideo, setOpenvideo] = useState(false);
  return (
    <>
{openvideo&& <Video setOpenvideo={setOpenvideo}></Video>}
      <div id="banner" data-aos="zoom-out"  data-aos-easing="linear"
    data-aos-duration="1500">
      


        <section className="bannersection" >
          <video className="imgbanner" src="https://res.cloudinary.com/dq3fragzr/video/upload/v1685030358/crecimiento_u9ne5c.mp4" autoPlay loop muted></video>
      {/* <img className="imgbanner" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684330175/BOLDSTRATEGY/Static/louise-viallesoubranne-5EhN4wbfvBc-unsplash_fr8uoc.jpg"  alt="" /> */}
          <div className="contetnbanner position-relative"  /* style={{ width: "800px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} */>
            <div className=" contentacercaimg align-self-center">
                <h2 style={{ fontSize: '50px !important' }} className="font-[Roboto] font-bold text-white">¡Impulsa tu negocio al siguiente nivel! </h2>
                <p className="font-[roboto] font-light text-white">Con nuestros servicios de agencia digital obtendrás: Investigación de mercado, análisis de la competencia, diseño, implementación de campañas publicitarias, estrategias de marketing digital personalizadas, creación de contenido de marketing, diseño web atractivo y funcional, integración de sistemas de pago seguros y soporte técnico especializado. 
¡No pierdas más ventas! Confía en nosotros para llevar tu negocio al éxito.  

                </p>
                <div className=" pt-5 content-img d-flex justify-content-center align-items-center">
                  <a onClick={()=>setOpenvideo(true)} style={{ cursor: "pointer"}}>
                    <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682739028/BOLDSTRATEGY/Static/Group_168_xdt2xi.png" />
                  </a>
                </div>
              </div>

            </div>
        </section>
      </div>


<div className="subir">
 
   <a className="btn btn-contacto" href="#banner"> <img style={{width:'30px'}} src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683494745/GOHComputer/Public/flecha-hacia-arriba_el5h3f.png" alt="" /></a>
</div>

      {/*  <div id="banner" className="position-relative" >
        <div className="content-banner">

          <div className="position-absolute  " style={{ width: "800px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h2 style={{ fontSize: '50px !important' }}>Desarrollo y crecimiento de tu negocio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non laborum odit, ut molestiae eos veniam magni quis atque voluptatibus eius commodi velit fugiat impedit consectetur sequi porro ducimus. Nostrum.</p>
            <div className="content-img d-flex justify-content-center align-items-center">
              <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682739028/BOLDSTRATEGY/Static/Group_168_xdt2xi.png" />

            </div>

          </div>
        </div>


      </div> */}
    </>
  );
}