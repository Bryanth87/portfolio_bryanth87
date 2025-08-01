import React from "react";

const About = () => {
  const sectionStyle = {
    padding: "5rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const titleStyle = {
    fontSize: "2.8rem",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "3rem",
    fontWeight: "700",
    position: "relative",
    paddingBottom: "1rem"
  };

  const titleAfterStyle = {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "4px",
    background: "linear-gradient(90deg, #3498db, #9b59b6)",
    borderRadius: "2px"
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "2.5rem",
    margin: "2rem 0",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderLeft: "5px solid #3498db"
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)"
  };

  const cardTitleStyle = {
    fontSize: "1.8rem",
    color: "#3498db",
    marginBottom: "1.5rem",
    fontWeight: "600",
    position: "relative",
    paddingBottom: "0.5rem"
  };

  const cardTitleAfterStyle = {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "50px",
    height: "3px",
    backgroundColor: "#e74c3c",
    borderRadius: "3px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2.5rem",
    marginTop: "2rem"
  };

  const personalInfoStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem"
  };

  const infoItemStyle = {
    padding: "1rem",
    backgroundColor: "#ecf0f1",
    borderRadius: "8px",
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
  };

  const infoItemHoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#3498db",
    color: "white"
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "1.5rem"
  };

  const highlightBoxStyle = {
    marginTop: "1.5rem",
    padding: "1.5rem",
    backgroundColor: "rgba(52, 152, 219, 0.1)",
    borderRadius: "10px",
    borderLeft: "4px solid #3498db",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.03)"
  };

  const listStyle = {
    paddingLeft: "1.8rem",
    listStyleType: "none"
  };

  const listItemStyle = {
    position: "relative",
    paddingLeft: "1.5rem",
    marginBottom: "0.8rem"
  };

  const listItemBeforeStyle = {
    content: '""',
    position: "absolute",
    left: "0",
    top: "0.7rem",
    width: "8px",
    height: "8px",
    backgroundColor: "#e74c3c",
    borderRadius: "50%"
  };

  const imageContainerStyle = {
    textAlign: "center",
    marginBottom: "2rem"
  };

  const profileImageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #3498db",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  const profileImageHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)"
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={titleStyle}>
        Acerca de mí
        <span style={titleAfterStyle}></span>
      </h2>
      
      {/* Contenedor de imagen */}
      <div style={imageContainerStyle}>
        <img 
          src="https://res.cloudinary.com/deg8jxjsv/image/upload/v1753998113/me-whats_haxbko.png" 
          alt="Bryan Toyom" 
          style={profileImageStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
          }}
        />
      </div>
      
      <div style={{...cardStyle, ':hover': cardHoverStyle}}>
        <h3 style={cardTitleStyle}>
          Full Stack Jack
          <span style={cardTitleAfterStyle}></span>
        </h3>
        <p style={paragraphStyle}>
          Soy un desarrollador FullStack junior Java developer, motivado a desarrollar aplicaciones de software modernas, 
          funcionales y con buenas prácticas de desarrollo. Me especializo en tecnologías como Java, Javascript, SpringBoot, React y
          bases de datos relaciones y no relacionales. 
        </p>
        <p style={paragraphStyle}>
          <strong style={{color: "#2c3e50"}}>Mis metas:</strong> Convertirme en un desarrollador senior. Ser líder y aportar a 
          proyectos de gran escala en Guatemala, además de crecer como un profesional en el ámbito del desarrollo de software y como persona.
        </p>
        <p style={paragraphStyle}>
          <strong style={{color: "#2c3e50"}}>Mis aspiraciones:</strong> Digitalizar comercios y locales
          de mi ciudad en Villa Nueva, Guatemala para que tengan una presencia digital y puedan competir en el mercado actual.
        </p>
      </div>

      <div style={gridStyle}>
        <div style={{...cardStyle, ':hover': cardHoverStyle}}>
          <h3 style={cardTitleStyle}>
            Información Personal
            <span style={cardTitleAfterStyle}></span>
          </h3>
          <div style={personalInfoStyle}>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Nombre:</strong><br />Bryan Toyom
            </div>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Edad:</strong><br />18 años
            </div>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Ubicación:</strong><br />Villa Nueva, Guatemala
            </div>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Email:</strong><br />tgbryan14@gmail.com
            </div>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Teléfono:</strong><br />+502 5486-6390
            </div>
            <div style={{...infoItemStyle, ':hover': infoItemHoverStyle}}>
              <strong>Años Desarrollando:</strong><br />3 años
            </div>
          </div>
          <div style={highlightBoxStyle}>
            <strong>Estado Actual:</strong> Estudiante de Informática | Desarrollando proyectos personales | 
            Buscando oportunidades de crecer y comercializar mis habilidades.
          </div>
        </div>

        <div style={{...cardStyle, ':hover': cardHoverStyle}}>
          <h3 style={cardTitleStyle}>
            Educación
            <span style={cardTitleAfterStyle}></span>
          </h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.8rem", fontWeight: "600" }}>Formación Actual</h4>
            <p><strong style={{color: "#3498db"}}>Fundación Kinal</strong></p>
            <p>Carrera: Périto en computación</p>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.8rem", fontWeight: "600" }}>Cursos y Certificaciones</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>React Native - Udemy</li>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>CCNA - CISCO</li>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>Git y GitHub - Udemy</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.8rem", fontWeight: "600" }}>Próximos Objetivos</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>Completar prácticas en el área laboral</li>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>Graduarme y salir cómo técnico en Fundación Kinal</li>
              <li style={listItemStyle}><span style={listItemBeforeStyle}></span>Amplíar conocimiento de lenguajes de programación</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{...cardStyle, ':hover': cardHoverStyle}}>
        <h3 style={cardTitleStyle}>
          Experiencia
          <span style={cardTitleAfterStyle}></span>
        </h3>
        <div style={gridStyle}>
          <div>
            <h4 style={{ color: "#e74c3c", marginBottom: "1rem", fontWeight: "600" }}>Proyectos Académicos</h4>
            <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px dashed #eee" }}>
              <strong style={{color: "#2c3e50"}}>Sistema de Gestión de Hoteles</strong> - 2024<br />
              <em style={{color: "#7f8c8d"}}>Tecnologías: SpringBoot, MySQL</em><br />
              Desarrollo de un sistema completo para la gestión de administradores y clientes.
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <strong style={{color: "#2c3e50"}}>Hotel Maq'uk</strong> - 2025<br />
              <em style={{color: "#7f8c8d"}}>Tecnologías: React, mongoDB, API</em><br />
              Desarrollo de hotel con sistema para gestionar tokens, buenas prácticas y con virtual dom de react.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;