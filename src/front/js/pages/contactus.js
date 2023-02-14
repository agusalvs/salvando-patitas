import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { Footer } from "../component/footer.jsx";
import ContactForm from "../component/contactform.jsx";

export const Contactus = () => {
  return (
    <div className="mx-auto py-5" style={{ backgroundColor: "#FFF6BD" }}>
      <ContactForm />
    </div>
  );
};
