import React from "react";

const About = () => {
  return (
    <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#0A2540" }}>Acerca de mí</h2>
      <p>
        Soy un desarrollador web apasionado por crear aplicaciones modernas y funcionales.
        Me especializo en React, Node.js y diseño de interfaces atractivas.
      </p>
      <ul>
        <li>Nombre: Juan Pérez</li>
        <li>Edad: 25 años</li>
        <li>Contacto: juan.perez@example.com</li>
        <li>Años de experiencia: 3</li>
      </ul>
    </section>
  );
};

export default About;