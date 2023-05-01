import React from "react";

export function Services() {
  return (
    <section className="services ">
      <div className="mb-5">
      <h2>Nuestros servicios</h2>
                <div className="underline-title mb-5"></div>
          </div>
      <div className="pt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate quaerat libero, maiores nemo enim, totam necessitatibus
           doloremque voluptatum velit nostrum? Sapiente provident exercitationem nam laudantium eum harum obcaecati ullam!</p>
      </div>
      <div className="services__grid pt-5 ">
        <div className="row ">
            <div className="services__item col-4 mb-5">
              <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/promocion_mi4xvf.png" alt="Icon 1" />
             {/*  <h3>Servicio 1</h3> */}
              <p>
                Descripción del servicio 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="services__item col-4 mb-5">
              <img  alt="Icon 2" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/development_ylgy3x.png" />
              {/* <h3>Servicio 2</h3> */}
              <p>
                Descripción del servicio 2. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="services__item col-4 mb-5">
              <img  alt="Icon 3"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/diseno-grafico_aiqpfe.png"/>
            {/*   <h3>Servicio 3</h3> */}
              <p>
                Descripción del servicio 3. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div> 

        </div>
        <div className="row  ">
          <div className="services__item col-4 ">
              <img  alt="Icon 2"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/edicion-de-video_zv7ej3.png"/>
              {/* <h3>Servicio 2</h3> */}
              <p>
                Descripción del servicio 2. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="services__item col-4 ">
              <img  alt="Icon 3" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/bombilla_bie0yc.png" />
             {/*  <h3>Servicio 3</h3> */}
              <p>
                Descripción del servicio 3. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        
      </div>
    </section>
  );
}

