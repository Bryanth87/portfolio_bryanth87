import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setSubmitStatus("¡Mensaje enviado exitosamente! Te contactaré pronto.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const sectionStyle = {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    color: "white"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: "bold"
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "3rem",
    opacity: "0.9"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "3rem",
    alignItems: "start"
  };

  const contactInfoStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "2rem",
    borderRadius: "15px",
    backdropFilter: "blur(10px)"
  };

  const formStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "2rem",
    borderRadius: "15px",
    backdropFilter: "blur(10px)"
  };

  const inputStyle = {
    width: "100%",
    padding: "1rem",
    marginBottom: "1rem",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#2c3e50"
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "120px",
    resize: "vertical"
  };

  const buttonStyle = {
    width: "100%",
    padding: "1rem 2rem",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: isSubmitting ? "not-allowed" : "pointer",
    transition: "background-color 0.3s ease",
    opacity: isSubmitting ? 0.7 : 1
  };

  const socialLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "3rem",
    flexWrap: "wrap"
  };

  const socialLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem 2rem",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "50px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)"
  };

  const contactMethodStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
    padding: "1rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "10px"
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>¡Hablemos!</h2>
        <p style={subtitleStyle}>
          ¿Tienes un proyecto en mente? ¿Buscas un desarrollador talentoso? 
          ¡Me encantaría escucharte y colaborar contigo!
        </p>

        <div style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0 auto" }}>
          <div style={{...formStyle, width: "100%"}}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem", textAlign: "center" }}>
              ✉️ Envíame un mensaje
            </h3>

            {submitStatus && (
              <div style={{
                padding: "1rem",
                backgroundColor: "rgba(46, 204, 113, 0.2)",
                border: "1px solid #2ecc71",
                borderRadius: "8px",
                marginBottom: "1rem",
                textAlign: "center"
              }}>
                {submitStatus}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="subject"
                placeholder="Asunto del mensaje"
                value={formData.subject}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
                value={formData.message}
                onChange={handleChange}
                required
                style={textareaStyle}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={buttonStyle}
                onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = "#c0392b")}
                onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = "#e74c3c")}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje 🚀"}
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9rem", opacity: "0.8" }}>
              <p>También puedes contactarme directamente por WhatsApp:</p>
              <a
                href="https://wa.me/54866390"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#25d366",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  marginTop: "0.5rem"
                }}
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Enlaces a redes sociales profesionales */}
        <div style={{ marginTop: "4rem" }}>
          <h3 style={{ textAlign: "center", fontSize: "1.8rem", marginBottom: "2rem" }}>
            🌐 Encuéntrame en línea
          </h3>
          <div style={socialLinksStyle}>
            <a
              href="https://www.linkedin.com/in/brayan-toyom-7a2024331"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#0077b5"}
              onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}
            >
              <span style={{ fontSize: "1.5rem" }}>💼</span>
              LinkedIn
            </a>

            <a
              href="https://github.com/bryanth87"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#333"}
              onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}
            >
              <span style={{ fontSize: "1.5rem" }}>🐙</span>
              GitHub: Bryanth87
            </a>

            <a
              style={socialLinkStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#ea4335"}
              onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}
            >
              <span style={{ fontSize: "1.5rem" }}>📧</span>
              Email: tgbryan14@gmail.
            </a>
          </div>

          <div style={{ 
            textAlign: "center", 
            marginTop: "4rem",
            padding: "2rem 1rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            <h4 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem", 
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)" 
            }}>
              CompuTrabajo: Brayan Toyom
            </h4>
            <div
              style={{
                display: "inline-block",
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginBottom: "2rem"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <img 
                src="https://res.cloudinary.com/deg8jxjsv/image/upload/v1754004427/computrabajo-Portafolio_vwbxfo.png"
                alt="Perfil CompuTrabajo - Brayan Toyom"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  borderRadius: "15px",
                  objectFit: "contain",
                  display: "block",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                  border: "3px solid rgba(255,255,255,0.3)"
                }}
              />
            </div>
            
            {/* Información separada DEBAJO de la imagen */}
            <div style={{ color: "white", textAlign: "center" }}>
              <div style={{ 
                fontSize: "1.4rem", 
                fontWeight: "bold", 
                marginBottom: "0.5rem",
                color: "#ff6b35"
              }}>
                🏢 CompuTrabajo
              </div>
              <div style={{ 
                fontSize: "1.2rem", 
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "white"
              }}>
                Brayan Toyom
              </div>
              <div style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                fontStyle: "italic"
              }}>
                Desarrollador Full Stack
              </div>
            </div>
            
            <p style={{
              marginTop: "1.5rem",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "500px",
              margin: "1.5rem auto 0 auto",
              lineHeight: "1.6"
            }}>
              Visita mi perfil completo para ver mi experiencia, 
              habilidades y disponibilidad laboral actualizada.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMe; 