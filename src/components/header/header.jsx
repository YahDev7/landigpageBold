import React, { useEffect, useState } from "react";

export function Header() {
  const [toggle, settoggle] = useState(false);
 /*  const navLinks = document.querySelector('.nav-links')
  function onToggleMenu(e){
      e.name = e.name === 'menu' ? 'close' : 'menu'
      navLinks.classList.toggle('top-[9%]')  
  } */
  const HandleToogle=(e)=>{
   console.log(toggle)

    const navLinks = document.querySelector('#navbar-sticky')

      if(!toggle)return  settoggle(true), navLinks.style.left="0%", document.getElementById('Header').classList.add("bg-gray-900"), document.querySelector('.ulnav').classList.add("bg-gray-900"), document.getElementById('Header').classList.remove("bg-none")
        return settoggle(false), navLinks.style.left="-180%",document.getElementById('Header').classList.remove("bg-gray-900"),document.querySelector('.ulnav').classList.remove("bg-gray-900")
  
    

        
    
  }

/*   const BtnMenu = () => {
    const d = document;
    // d.getElementById('Header').style.position="relative"
    d.getElementById('Header').style.background = "#1a1a1a"
  } */

  
/*   const Scroll = () => {
    const d = document;
    let positionY = window.scrollY;

    addEventListener('scroll', () => {
      let despazamiento_actual = window.scrollY;

      if (positionY >= despazamiento_actual) {

        if (despazamiento_actual <= 100) { //o 80
          d.getElementById('Header').classList.remove("fixed");
          d.getElementById('Header').style.background = "none"

        } else {
          if (positionY >= 175) {
            d.getElementById('Header').classList.add("fixed");
            d.getElementById('Header').style.top = "0px";

          }

        }

      } else {

        d.getElementById('Header').style.top = "-110px"
        d.getElementById('Header').style.background = "#1a1a1a"

      }

      positionY = despazamiento_actual;
    })
  } */


  const Scroll2 = () => {
    const d = document;
    let positionY = window.scrollY;

    addEventListener('scroll', () => {
      let despazamiento_actual = window.scrollY;

      if (positionY >= despazamiento_actual) {

        if (despazamiento_actual <= 100) { //o 80
   console.log(toggle)
          
          if(toggle===false) return  console.log(" guardar"),d.getElementById('Header').style.background = "none"
          return console.log("no guardar"), d.getElementById('Header').style.background = "#1a1a1a" /*  return d.getElementById('Header').style.background = "none" */
        } else {
          if (positionY >= 175) {
           // d.getElementById('Header').classList.add("fixed");
            d.getElementById('Header').style.top = "0px";

          }

        }

      } else {

        d.getElementById('Header').style.top = "-110px"
        d.getElementById('Header').style.background = "#1a1a1a"

      }

      positionY = despazamiento_actual;
    })
  }

  useEffect(() => {
   /*  Scroll(); */
    Scroll2()
  }, [toggle]); 
  return (
    <>
{/* 

<header className="bg-white fixed top-0 z-10 w-100">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."/>
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
               <ion-icon onClick={(e)=>onToggleMenu(e)} name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
            </nav>
    </header> */}

 <nav id="Header"  className="h-[60px] flex bg-none border-none fixed w-full z-20 top-0 left-0 border-b border-gray-900 font-[Roboto] ">
  <div className="max-w-screen-xl align-self-center  grid w-100  grid-cols-8 place-items-center mx-auto p-4">
  <a className="" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>

{/*   <a href="https://flowbite.com/" className="flex items-center col-start-1 col-end-3  place-items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a> */}
 
  <div className="transition-all absolute md:static !top-[91%] left-[-180%] col-start-3 col-end-7 w-100 " id="navbar-sticky">
    <ul className="font-bold ulnav  flex flex-col place-items-center  text-gray-800 md:p-0  rounded-lg md:!bg-none md:flex-row md:space-x-8 md:mt-0 md:border-0e">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 !text-white bg-[#f5c427] rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white hover:!bg-[#f5c427] rounded  ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:!bg-[#f5c427] rounded">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:!bg-[#f5c427] rounded">Contact</a>
      </li>
    </ul>
  </div> 
  <div className=" flex content-center max-sm:col-start-6 max-sm:col-end-9  col-start-7 col-end-9">
      <button type="button" className=" font-bold text-white bg-[#f5c427] hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Contactanos</button>
      <button onClick={(e)=>HandleToogle()} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
       {/*  <span className="sr-only">Open main menu</span> */}
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  </div>
</nav> 
 

      {/* <header id="Header">


        <nav className="scrolled navbar navbar-expand-lg" data-aos="fade-down" data-aos-easing="linear"
          data-aos-duration="1500">
          <div className="centrar-header">
            <div className="row w-100 justify-content-between  ">
              <div className="col-sm-12 col-xl-2 row m-auto">

                <div className="col-10">

                  <a className="" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>
                </div>


                <div className="col-1 hamburger">

                  <button className="navbar-toggler p-0" onClick={(e) => BtnMenu()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                  </button>
                </div>


              </div>
              <div className="col-sm-2 col-md-10 row">
                <div className="max-md-collapse navbar-collapse  " id="navbarSupportedContent">
                  <div className="col-lg col-md-8">
                    <ul className="navbar-nav mb-2 mb-lg-0 all">

                      <li className="nav-item">
                        <a className="nav-link active" href="#banner">Inicio</a>

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
                      <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " href="#contact"> Contactanos</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </nav>

      </header> */}
    </>

  );
}

