import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Loader } from "../../modal";
const MySwal = withReactContent(Swal)
const data = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
export function Contact() {
  const [formState, setFormState] = useState(data);
  const [loader, setLoader] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true)

    const serviceID="service_yi99f8n"
    const templateID="template_2beb3qo"
    let res=await emailjs.send(serviceID,templateID,formState)
     
    if(res.status===200) return MySwal.fire({
      title: <h2>Se envio con éxito!</h2>,
      icon: 'success'
    })
    setFormState(data)
    setLoader(false)


    return alert("Ocurrio un error al anviar el correo");

  };

  return (

    <section id="contact" className="contact pb-5">
      {loader&& <Loader></Loader>}

      <div className="mb-5">
        <h2>Contacto</h2>
        <div className="underline-title mb-5"></div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">

          <div className="col-lg-4 formdatos">
            <div className="info formdatos-content">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Ubicación:</h4>
                <p>Dirección, Ciudad, País</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>email@ejemplo.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Teléfono:</h4>
                <p>+00 0000000000</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0 formcont">
            <form onSubmit={handleSubmit} className="php-email-form formcont-content">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="form-control"
                    id="name"
                    placeholder="Nombre completo"
                    required
                  />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="form-control"
                  id="subject"
                  placeholder="Asunto"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="5"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>

              {/* <div className="my-3">
                <div className="loading">Enviando...</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Tu mensaje ha sido enviado. ¡Gracias!
                </div>
              </div> */}

              <div className="text-center">
                <button type="submit" className="btn">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


