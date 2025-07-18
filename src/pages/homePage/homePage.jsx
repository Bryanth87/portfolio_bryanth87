import React from "react";
import Navbar from "../../components/navBar/navBar";

const homePage = () => {
<Navbar />
  return (
    <section style={{ textAlign: "center", padding: "2rem", background: "#f8f9fa" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0A2540" }}>¡Bienvenido!</h1>
      <p style={{ fontSize: "1.2rem", color: "#2D9CDB" }}>
        "Transformando ideas en soluciones digitales."
      </p>
    </section>
  );
};

export default homePage;