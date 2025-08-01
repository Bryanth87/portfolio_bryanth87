import React from "react";

const FootBar = () => {
  const footerStyle = {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "2rem",
    textAlign: "center",
    marginTop: "auto",
    borderTop: "3px solid #3498db"
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto"
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#3498db"
  };

  const messageStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    color: "#ecf0f1"
  };

  const bottomStyle = {
    fontSize: "0.9rem",
    color: "#bdc3c7",
    borderTop: "1px solid #34495e",
    paddingTop: "1rem",
    marginTop: "1.5rem"
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h3 style={titleStyle}>
          Gracias por visitar mi portafolio
        </h3>
        
        <p style={messageStyle}>
          Espero que hayas disfrutado conociendo mi trabajo y mi conocimiento, contacame.
        </p>

        <div style={bottomStyle}>
          <p>
            © {currentYear} Bryan Toyom • Hecho con ❤️ y React
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
            🚀 Desarrollado en Guatemala 🇬🇹
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FootBar;
