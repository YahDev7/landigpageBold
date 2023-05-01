import React from "react";

export function Header() {
  return (
    <>

      <header id="Header" 
      /* style={{ height: "150px", transition: "300ms all" ,position: "relative"}} */>

        {/*  <div id="HMain" style={{height:"595px"}}>
          <div className="" style={{width: "100%", textAlign:"center",padding:"10px"}}>
              <a className="p-0" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /> </a>
              <ul className="header-nav">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Price</a></li>
              </ul>

              <button className="btn btn-buy">Compra ya</button>
          </div>

      </div> */}




<div style={{position:'relative'}}>

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

    <div style={{/* height:"706px", */height:"100%",position:'relative'}}>

      <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682739719/BOLDSTRATEGY/Static/image_67_h8dk5h.png" style={{opacity:'0.1', width:'100%', objectFit:'cover'  }} /> 
    </div>  

  <div class="d-flex align-items-center">

      <div className="content-banner  col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate">

            <h2 style={{fontSize:'50px !important' }}>Desarrollo y crecimiento de tu negocio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non laborum odit, ut molestiae eos veniam magni quis atque voluptatibus eius commodi velit fugiat impedit consectetur sequi porro ducimus. Nostrum.</p>
            <img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682739028/BOLDSTRATEGY/Static/Group_168_xdt2xi.png"  /> 
        
      </div>
  </div>
</div>


   

        {/* 
      <div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="menuLateral" aria-labelledby="offcanvasNavbarLabel">         

              <div className="offcanvas-header menuLateralHeader" >
              <h5 className="offcanvas-title menuLateraltitle pt-3 pb-3 text-center" style={{fontSize: "20px !important", textDecoration:"none"}}><a  style={{textDecoration:"none"}} href="#/categorias"  >Categorias</a></h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
          
              <div className="menuLateralBody offcanvas-body">
                  <ul className="navbar-nav accordion accordion-flush menuLateralUl " id="MenuLateralAccordionDnone">
          
                     

                  </ul>
              </div>
              

      </div> */}



      </header>
    </>

  );
}

