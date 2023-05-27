import React from "react";

export function Services() {
  return (
    <section className="services" id='Services'>
      <div className="mb-5 font-[Roboto] font-semibold text-[#1a1a1a]"  data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500" >
      <h2 className="!text-5xl" >Nuestros servicios</h2>
                <div className="underline-title mb-5"></div>
          </div>
      {/* <div className="pt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate quaerat libero, maiores nemo enim, totam necessitatibus
           doloremque voluptatum velit nostrum? Sapiente provident exercitationem nam laudantium eum harum obcaecati ullam!</p>
      </div> */}
      <div className="services__grid pt-2" >
        <div className="row" >
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5   hover:shadow-lg hover:!border-1 hover:border-[#cccc]-500"
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500">
              <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684300179/BOLDSTRATEGY/Static/promocion_mugr4l.png" alt="Icon 1"  className="pt-4"/>
             <h3 className="font-[Roboto] font-semibold">Marketing</h3>
              <p className="font-[Roboto]">
              Diseño y gestión de campañas publicitarias en redes sociales específicas para productos o servicios de educación o cursos en línea

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5 hover:shadow-lg hover:!border-1  hover:border-[#cccc]-500" data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500">
              <img  alt="Icon 2" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684300179/BOLDSTRATEGY/Static/desarrollador-de-software_qjaxov.png"  className="pt-4"/>
           <h3 className="font-[Roboto] font-semibold">Desarrolo Web</h3>
              <p className="font-[Roboto]">
               Web de e-commerce que ofrece un catálogo de productos, carrito de compras, pagos seguros, gestión de usuarios, gestion de inventario, gestion de movimientos, búsqueda de productos, promociones y más

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6 mb-5 hover:shadow-lg hover:!border-1  hover:border-[#cccc]-500" data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500">
              <img  alt="Icon 3"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684300179/BOLDSTRATEGY/Static/diseno-grafico_orukrw.png" className="pt-4"/>
             <h3 className="font-[Roboto] font-semibold">Diseño Web</h3>
              <p className="font-[Roboto]">
              Creación y diseño de imágenes publicitarias para redes sociales y publicidad online.

              </p>
            </div> 

        
       
          <div className="services__item col-lg-4 col-sm-12 col-md-6 hover:shadow-lg hover:!border-1  hover:border-[#cccc]-500" data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500">
              <img  alt="Icon 2"  src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684300179/BOLDSTRATEGY/Static/edicion-de-video_hzsiei.png" className="pt-4"/>
           <h3 className="font-[Roboto] font-semibold">Edicion de Videos</h3>
              <p className="font-[Roboto]">
              Edición de videos promocionales para redes sociales y publicidad online.

              </p>
            </div>
            <div className="services__item col-lg-4 col-sm-12 col-md-6 hover:shadow-lg hover:!border-1  hover:border-[#cccc]-500" data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500">
              <img  alt="Icon 3" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1684300179/BOLDSTRATEGY/Static/bombilla_x1rc99.png"  className="pt-4"/>
             <h3 className="font-[Roboto] font-semibold">Estrategias</h3>
              <p className="font-[Roboto]">
              Analítica web para medir y evaluar el tráfico y el comportamiento de los usuarios en el sitio web.
Creación y gestión de perfiles en redes sociales para aumentar la presencia en línea y la interacción con los clientes
              </p>
            </div>
            </div>
        
      </div>
    </section>
  );
}

