// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaevba");
  if (state.succeeded) {
    return <p>Nos estaremos contactando a la brevedad!</p>;
  }
  return (
    <div className="container mx-auto my-3 py-3" style={{ width: "700px" }}>
      <form
        onSubmit={handleSubmit}
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/xyyaevba"
        method="post"
      >
        <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
          {" "}
          Formulario de contacto{" "}
        </p>
        <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
          Ingrese sus consultas y/o comentarios y le contactaremos a la
          brevedad.
        </p>
        <fieldset id="fs-frm-inputs">
          <div class="mb-5">
            {/* <label for="exampleFormControlInput1" class="form-label">
              Correo electrónico
            </label> */}
            <input
              type="email"
              id="Email"
              className="form-control form-control-lg mb-2"
              placeholder="Correo electrónico"
              style={{
                borderRadius: "1rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFD4B2",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
          </div>
          <div class="mb-5">
            {/* <label for="exampleFormControlTextarea1" class="form-label">
              Mensaje
            </label> */}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Mensaje"
              style={{
                borderRadius: "1rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFD4B2",
                opacity: "75%",
                fontSize: "15px",
              }}
            ></textarea>
          </div>
          {/* <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        /> */}
        </fieldset>
        <input
          class="col-auto mx-auto px-2 py-1 d-flex justify-content-center"
          type="submit"
          value="Enviar"
          style={{
            borderRadius: "1rem",
            borderColor: "#86C8BC",
            borderWidth: "2px",
            backgroundColor: "#86C8BC",
            opacity: "75%",
            fontSize: "16px",
            color: "white",
          }}
        />
        {/* <div class="col-auto mx-auto d-flex justify-content-center">
          <button
            type="submit"
            class="btn mb-3"
            style={{
              borderRadius: "1rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFD4B2",
              opacity: "75%",
              fontSize: "15px",
            }}
          >
            Enviar
          </button>
        </div> */}
      </form>
    </div>
  );
}
export default ContactForm;

// function App() {
//   return <ContactForm />;
// }
// export default App;
