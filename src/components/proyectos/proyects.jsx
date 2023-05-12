import React from "react";
const projects = [
    { id: 1, name: 'Proyecto 1', rating: 5,description:'1', title:'1',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 2, name: 'Proyecto 2', rating: 4,description:'2', title:'2',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 3, name: 'Proyecto 3', rating: 5,description:'13', title:'3',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 4, name: 'Proyecto 4', rating: 5,description:'4', title:'4',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 5, name: 'Proyecto 5', rating: 3,description:'5', title:'5',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 3, name: 'Proyecto 3', rating: 5,description:'13', title:'3',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 4, name: 'Proyecto 4', rating: 5,description:'4', title:'4',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
    { id: 5, name: 'Proyecto 5', rating: 3,description:'5', title:'5',image:'https://res.cloudinary.com/dq3fragzr/image/upload/v1682828269/BOLDSTRATEGY/Static/app-1_vh3jhs.jpg' },
];
export function Proyects() {
    const filteredProjects = projects.filter((project) => project.rating === 5);

    return (
        <>
            <div className="proyects" id="Proyectos">
                <div className="mb-5">
                <h2 >Nuestros Proyectos</h2>
                <div className="underline-title mb-5"></div>
          </div>
                <div className="row" >
              
              {filteredProjects.map((project) => (
                        <div className="col-md-4" key={project.id} >
                            <div className="card mb-7 shadow-sm">
                            <img className="card-img-top" src={project.image} alt={project.title} />
                                <div className="card-body">
                                    <h4 className="card-title">{project.title}</h4>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                   
                ))}
              </div>
              </div>
        </>
    );
}