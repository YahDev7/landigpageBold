import React from 'react';
const packages = [
    {
        id: 1,
        title:'ECONOMICA',
        name: 'Paquete Básico',
        price: 100,
        description: [
          'Incluye funcionalidades básicas', 
          ' lorem lorem lorem loremlorem',
          ' lorem lorem lorem loremlorem',
          'asdasdsadasd',
          'asdasdsadasd',
          'asdasdsadasd',
          'asdasdsadasd'],
        position:'first'
    },
    {
        id: 2,
        title:'PREMIUN',
        name: 'Paquete Avanzado',
        price: 300,
        description: [
          'Incluye funcionalidades avanzadas',
          'asdasdsadasd',
          'asdasdsadasd',
          ' lorem lorem lorem loremlorem',
          ' lorem lorem lorem loremlorem',
          'asdasdsadasd',
          'asdasdsadasd',
          'asdasdsadasd'
        ],
       
        position:'second'
    },
    {
        id: 3,
       
        title:'AVANZADO',
        name: 'Paquete Intermedio',
        price: 200,
        description: [
          'Incluye todas las funcionalidades',
        'asdasdsadasd',
        'asdasdsadasd',
          ' lorem lorem lorem loremlorem',
          ' lorem lorem lorem loremlorem',
          'asdasdsadasd',
        'asdasdsadasd',
        'asdasdsadasd',
      ],
      position:'three',
      recomendada:true,
    },
];

export function Packages() {

  const features=(tecnologias)=>{
    let box = [];
    tecnologias.forEach(element => {
        box.push(
            <li key={Math.random()*100} className="col">
                
                    element
            </li>)

    })

    return box
}
    return (
        <div className='package'>
          <div className="mb-5">
                <h2 >Precios</h2>
                <div className="underline-title mb-5"></div>
          </div>

            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti eligendi deserunt voluptas incidunt adipisci error dignissimos sit in laudantium non ratione, optio architecto distinctio, qui quisquam, doloremque consectetur rem.</p>
            </div>
            <div className="row pak">
                {packages.map((pkg) => (
                    <div className="col-md-4 p-0" key={pkg.id}>
                      <div className={"card mb-3 shadow-sm " + (pkg.recomendada ? "recomendada " : "") + (pkg.position === 'first' ? "first" : "") + (pkg.position === 'three' ? "three" : "")+(pkg.position === 'second' ? "second" : "")}>
                        {/* <div className={ pkg.recomendada?"card mb-3 shadow-sm recomendada" :"" && pkg.position==='first'?"first card mb-3 shadow-sm":''&& pkg.position==='three'?"three card mb-3 shadow-sm":''   } > */}
                        <h3 className='gama pt-4' style={{textAlign:'center'}}>{pkg.title}</h3>
                           {/*  <div className="card-header">
                                <h4 className="my-0 font-weight-normal">{pkg.name}</h4>
                            </div> */}
                            <div className="card-body">
                                <h3 className="card-title pricing-card-title text-center">
                                    ${pkg.price}
                                </h3>
                               <p className='tiempo text-center'>PRECIO POR MES</p>
                              <div className="underline mb-5"></div>

                                <ul className="list-unstyled features mt-3 mb-4">
                                    {features(pkg.description)}
                                    {/* <li>{pkg.description}</li> */}

                                </ul>

                                <button type="button" className=" btn btn-lg btn-comprar ">
                                    Seleccionar
                                </button>
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