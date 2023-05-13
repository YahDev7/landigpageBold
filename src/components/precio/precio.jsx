import React from 'react';
const packages = [
    {
        id: 1,
        title:'ECONOMICA',
        name: 'Paquete Básico',
        price: 590,
        description: [
          ' Administración de 2 pautas publicitarias en Facebook e Instagram', 
          ' Elaboración de Copywriting. ',
          ' Estrategias de Contenido',
          ' Manejo de 2 Redes / IG y FB',
          ' Landing Page. ',
          ' 10 Publicaciones Mensuales. ',
          ' 1 Reunión mensual. ', 'De Regalo: En el primer mes obtienes GRATIS un video profesional para reel. '
        ],
         
        position:'first'
    },
    {
        id: 3,
        title:'PREMIUN',
        name: 'Paquete Avanzado',
        price: 1150 ,
        description: [
          ' Administración de 6 pautas publicitarias en Facebook, Instagram y Tik Tok.',
          ' Elaboración de Copywriting. ',
          ' Estrategias de Contenido. ',
          ' Grilla de Contenido. ',
          '  Investigación de Mercado.',
          ' Manejo de 3 Redes / IG, FB y TIK TOK',
          ' Creación de Tienda Virtual para venta de productos. ',
          ' 30 Publicaciones Mensuales. ',
          ' 20 Stories (Formato 1080px x 1920px).',
          ' 2 Reuniones mensuales. ',
          ' Informe detallado mensualmente.',
          ' 6 Videos formato Reel. '
        ],
       
        position:'three'
    },
    {
        id: 2,
       
        title:'AVANZADO',
        name: 'Paquete Intermedio',
        price: 890 ,
        description: [
        ' Administración de 4 pautas publicitarias en Facebook e Instagram',
        ' Elaboración de Copywriting. ',
        ' Estrategias de Contenido. ',
        ' Manejo de 2 Redes / IG y FB',
        ' Creación de Tienda Virtual personalizada para venta de productos ',
        ' 18 Publicaciones Mensuales. ',
        ' 12 Stories (Formato 1080px x 1920px).',
        ' 2 Reuniones mensuales. ',
        ' Informe detallado mensualmente.',
        ' 3 Videos formato Reel. '

      ],
      position:'second',
      recomendada:true,
    },
];

export function Packages() {

  const features=(tecnologias)=>{
    let box = [];
    tecnologias.forEach(element => {
        box.push(
            <li key={Math.random()*100} className="col row">
                <div className='col-1'>

              <img  style={{width:'15px'}} src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683492808/GOHComputer/Public/check_mihut7.png" alt="" />  
                </div>
              <p className='col' >{ element}</p>          
             </li>)

    })

    return box
}
    return (
        <div className='package pt-5' id='Price'>
          <div className="mb-5">
                <h2 >Precios</h2>
                <div className="underline-title mb-5"></div>
          </div>

            {/* <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti eligendi deserunt voluptas incidunt adipisci error dignissimos sit in laudantium non ratione, optio architecto distinctio, qui quisquam, doloremque consectetur rem.</p>
            </div> */}
            <div className="row pak">
                {packages.map((pkg) => (
                    <div className={"col-md-4 col-sm-12 p-0"+(pkg.position === 'first' ? " order-1" : "") + (pkg.position === 'second' ? " order-2 " : "")+(pkg.position === 'three' ? " order-3" : "")} key={pkg.id}>
                      <div className={"card mb-3 shadow-sm " + (pkg.recomendada ? "recomendada " : "") + (pkg.position === 'first' ? "first order-1" : "") + (pkg.position === 'three' ? "three order-2" : "")+(pkg.position === 'second' ? "second order-3" : "")}>
                        {/* <div className={ pkg.recomendada?"card mb-3 shadow-sm recomendada" :"" && pkg.position==='first'?"first card mb-3 shadow-sm":''&& pkg.position==='three'?"three card mb-3 shadow-sm":''   } > */}
                        <h3 className='gama pt-4' style={{textAlign:'center'}}>{pkg.title}</h3>
                           {/*  <div className="card-header">
                                <h4 className="my-0 font-weight-normal">{pkg.name}</h4>
                            </div> */}
                            <div className="card-body">
                                <h3 className="card-title pricing-card-title text-center">
                                    S/{pkg.price}
                                </h3>
                               <p className='tiempo text-center'>PRECIO POR MES</p>
                              <div className="underline mb-5"></div>

                                <ul className="list-unstyled features mt-3 mb-4">
                                    {features(pkg.description)}
                                    {/* <li>{pkg.description}</li> */}

                                </ul>
                                <div className='text-center'>
                                 {/*  <button type="button" className=" btn btn-lg btn-comprar ">
                                      Seleccionar */}
                                      <a
                                            href="https://api.whatsapp.com/send?phone=989471269"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-comprar btn-xl col-4 pt-2 pb-2"
                                        >
                                            <i className="fab fa-whatsapp mr-2 me-2"></i>Solicitar 
                                        </a>



                                 {/*  </button> */}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};




/*  <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */