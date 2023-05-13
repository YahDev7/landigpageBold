import React from "react";

export function Header() {
  return (
    <>

      <header id="Header">


      <nav className="scrolled navbar navbar-expand-lg">
          <div className="centrar-header">
            <div className="row w-100 justify-content-between  ">
              <div className="col-sm-12 col-xl-2 row m-auto">

              <div className="col-10">

                <a className=""  href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>
              </div>


            <div className="col hamburger">

                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 {/*  <span className="navbar-toggler-icon"></span> */}
                 <div></div>
                 <div></div>
                 <div></div>
                </button>
            </div>


              </div>
              <div className="col-sm-2 col-md-10 row">
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                  <div className="col-lg col-md-8">
                    <ul className="navbar-nav mb-2 mb-lg-0 all">

                      <li className="nav-item">
                        <a className="nav-link active" href="#Banner">Inicio</a>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Services">Servicios</a>

                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#Proyectos">Proyectos</a>

                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#Price">Precio</a>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Nosotros">Nosotros</a>

                      </li>
                   

                    </ul>

                  </div>


                  <div className=" col-12 col-md-4  col-lg-3">
                    <div className="text-center  lg-text-end">
                      <a className="btn btn-contacto" href="#contact"> Contactanos</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </nav>



    {/*     <nav className="scrolled navbar navbar-expand-lg">
          <div className="centrar-header">
            <div className="row justify-content-between  ">
              <div className="col-md-2 col-12 row p-0 text-center">

                <a className="p-0 col-10" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>



                <button className="navbar-toggler p-0 col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>


              </div>
              <div className="col-12 col-md-10 p-0 row">
                <div className="collapse navbar-collapse p-0 " id="navbarSupportedContent">
                  <div className="col-lg col-md-8">
                    <ul className="navbar-nav  mb-2 mb-lg-0">

                      <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>

                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#">Features</a>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Price</a>

                      </li>

                    </ul>

                  </div>


                  <div className=" col-12 col-md-4  col-lg-3">
                    <div className=" text-center">
                      <a className="btn btn-contacto" href="#contacto"> Contactame</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </nav> */}


        {/* <nav className="cont p-4 navbar navbar-expand-lg  navbar-light" >
  <div className="row justify-content-between align-items-center  centrar-header">
    <div className="col-md-2 text-center">
      <a className="p-0" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>

    <div className="collapse navbar-collapse col-md-6 " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>

        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#">Features</a>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Price</a>

        </li>
      </ul>

    </div>
    <div className="col-md-4 text-end">
        <button className="btn btn-buy">Compra ya</button>
      </div>
  </div>
</nav> */}


        {/*   <div style={{ position: 'relative' }}>

  <div className="cont p-4" >
    <div className="row justify-content-between align-items-center centrar-header">

      <div className="col-md-2 text-center">
        <a className="p-0" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>
      </div>

      <div className="col-md-6 text-start">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Price</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 text-end">
        <button className="btn btn-buy">Compra ya</button>
      </div>
    </div>
  </div>

</div> */}

      </header>
    </>

  );
}

