import React from "react";

export function Services() {
  return (
    <section className="services" id='Services'>
      <div className="mb-5">
      <h2>Nuestros servicios</h2>
                <div className="underline-title mb-5"></div>
          </div>
      {/* <div className="pt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate quaerat libero, maiores nemo enim, totam necessitatibus
           doloremque voluptatum velit nostrum? Sapiente provident exercitationem nam laudantium eum harum obcaecati ullam!</p>
      </div> */}
      <div className="services__grid pt-2 ">
        <div className="row ">
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5">
              <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/promocion_mi4xvf.png" alt="Icon 1" />
             {/*  <h3>Servicio 1</h3> */}
              <p>
              Diseño y gestión de campañas publicitarias en redes sociales específicas para productos o servicios de educación o cursos en línea

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5">
              <img  alt="Icon 2" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/development_ylgy3x.png" />
              {/* <h3>Servicio 2</h3> */}
              <p>
               Web de e-commerce que ofrece un catálogo de productos, carrito de compras, pagos seguros, gestión de usuarios, gestion de inventario, gestion de movimientos, búsqueda de productos, promociones y más

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5">
              <img  alt="Icon 3"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/diseno-grafico_aiqpfe.png"/>
            {/*   <h3>Servicio 3</h3> */}
              <p>
              Creación y diseño de imágenes publicitarias para redes sociales y publicidad online.

              </p>
            </div> 

        
       
          <div className="services__item col-lg-4 col-sm-12 col-md-6">
              <img  alt="Icon 2"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/edicion-de-video_zv7ej3.png"/>
              {/* <h3>Servicio 2</h3> */}
              <p>
              Edición de videos promocionales para redes sociales y publicidad online.

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6">
              <img  alt="Icon 3" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682824336/BOLDSTRATEGY/Static/bombilla_bie0yc.png" />
             {/*  <h3>Servicio 3</h3> */}
              <p>
              Analítica web para medir y evaluar el tráfico y el comportamiento de los usuarios en el sitio web.
Creación y gestión de perfiles en redes sociales para aumentar la presencia en línea y la interacción con los clientes
              </p>
            </div>
            </div>
        
      </div>
    </section>
  );
}

