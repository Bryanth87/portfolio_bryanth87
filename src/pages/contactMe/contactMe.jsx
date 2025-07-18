import React from "react";

const contactMe = () => {
  return (
    <section style={{ textAlign: "center", padding: "2rem", background: "#f8f9fa" }}>
      <h2 style={{ color: "#0A2540" }}>Contacto</h2>
      <p>
        Conéctate conmigo en{" "}
        <a href="https://www.linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer" style={{ color: "#2D9CDB" }}>
          LinkedIn
        </a>{" "}
        o{" "}
        <a href="https://www.computrabajo.com/usuario" target="_blank" rel="noopener noreferrer" style={{ color: "#2D9CDB" }}>
          CompuTrabajo
        </a>.
      </p>
    </section>
  );
};

export default contactMe;