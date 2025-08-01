import React from "react";
import Navbar from "../../components/navBar/navBar";

const HomePage = () => {
  const heroStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    position: "relative"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    animation: "fadeInUp 1s ease-out",
    textAlign: "center",
    margin: "0 auto 1rem auto"
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    opacity: "0.9",
    maxWidth: "600px",
    lineHeight: "1.6",
    textAlign: "center",
    margin: "0 auto 2rem auto"
  };

  const buttonStyle = {
    padding: "12px 30px",
    fontSize: "1.1rem",
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "1rem"
  };

  return (
    <section id="home" style={heroStyle}>
      <Navbar />
      <div style={{ marginTop: "60px" }}>
        <h1 style={titleStyle}>Para crecer, necesitas traicionar las expectativas de los demás</h1>
        <p style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
          Programador Junior de Java
        </p>
        <a 
          href="#about" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
        >
          <div>
            <div>
              <div>
              </div>
            </div>
          </div>
          Conoce más sobre mí
        </a>
      </div>
    </section>
  );
};

export default HomePage;