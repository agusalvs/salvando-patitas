// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaevba");
  if (state.succeeded) {
    return (
      <p
        className="my-5 mx-auto d-flex justify-content-center fw-light"
        style={{ color: "#64748B" }}
      >
        Nos estaremos contactando a la brevedad!
      </p>
    );
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
              name="_replyto"
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div class="mb-5">
            {/* <label for="exampleFormControlTextarea1" class="form-label">
              Mensaje
            </label> */}
            <textarea
              class="form-control"
              name="message"
              id="text_message"
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <button
          class="col-auto mx-auto px-2 py-1 d-flex justify-content-center"
          type="submit"
          style={{
            borderRadius: "1rem",
            borderColor: "#86C8BC",
            borderWidth: "2px",
            backgroundColor: "#86C8BC",
            opacity: "75%",
            fontSize: "16px",
            color: "white",
          }}
          disabled={state.submitting}
        >
          Enviar
        </button>
        {/* <input
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
        /> */}
      </form>
    </div>
  );
}
export default ContactForm;
