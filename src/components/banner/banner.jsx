import React, { useState } from "react";
import { Video } from "../../video";

export function Banner() {
  const [openvideo, setOpenvideo] = useState(false);
  return (
    <>

      <div id="banner">
      {openvideo&& <Video setOpenvideo={setOpenvideo}></Video>}

        <section className="bannersection" >
          <div className="contetnbanner position-relative"  style={{ width: "800px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div className=" contentacercaimg align-self-center">
                <h2 style={{ fontSize: '50px !important' }}>Desarrollo y crecimiento de tu negocio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non laborum odit, ut molestiae eos veniam magni quis atque voluptatibus eius commodi velit fugiat impedit consectetur sequi porro ducimus. Nostrum.</p>
                <div className="content-img d-flex justify-content-center align-items-center">
                  <a onClick={()=>setOpenvideo(true)} style={{ cursor: "pointer"}}>
                    <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682739028/BOLDSTRATEGY/Static/Group_168_xdt2xi.png" />
                  </a>
                </div>
              </div>

            </div>
        </section>
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