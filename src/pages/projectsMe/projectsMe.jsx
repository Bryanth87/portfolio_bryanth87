import React, { useState } from "react";

const ProjectsMe = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Proyecto SuperMarks",
      description: "Un sistema creado con Java para la gestión de un supermercado",
      longDescription: "Este proyecto fue desarrollado como parte de mi formación académica. Incluye funcionalidades como registro de productos, registro de ventas y gestión de inventarios.",
      technologies: ["JavaFX", "MySQL", "ScenBuilder", "Maven"],
      category: "backend",
      githubLink: "https://github.com/Bryanth87/IN5BM_Proyecto_SuperMarks.git",
      features: [
        "Base de datos escalable y segura",
        "Buenas prácticas de desarrollo",
        "Ejecución local con interfaz gráfica",
        "Almacenamiento de datos",
        "Generación de reportes PDF"
      ],
      learned: [
        "Nomenclatura de JavaFX",
        "Uso de ScenBuilder para diseño de UI",
        "El buen uso de Maven",
        "Configuración de POM.xml"
      ]
    },
    {
      id: 2,
      title: "Front_CasaMía",
      description: "Plataforma de hotelería enfocada en la promoción de hospedajes en Guatemala",
      longDescription: "Desarrollo personalizado y optimizado para un mejor rendimiento y experiencia de usuario",
      technologies: ["React", "Cloudinary", "tailwind", "css"],
      category: "frontend",
      githubLink: "https://github.com/Coders-IN6BM/front_CasaMia.git",
      features: [
        "Catálogo de productos con filtros",
        "Carrito de compras persistente",
        "UIX responsiva y accesible",
        "Panel de vendedor para gestión",
        "Sistema de reseñas y calificaciones"
      ],
      learned: [
        "Integrar componentes",
        "Manejo de estado global con Context",
        "Optimización de imágenes y rendimiento",
        "Optimización de hooks"
      ]
    },
    {
      id: 3,
      title: "Gestor de comentarios",
      description: "Página web moderna y responsiva para una startup tecnológica con animaciones y optimización SEO.",
      longDescription: "Landing page corporativa con diseño moderno, animaciones CSS avanzadas, optimización SEO completa y formularios de contacto integrados con servicios de email marketing.",
      technologies: ["Node.js", "Express", "MongoDB", "Swagger, Postman"],
      category: "backend",
      githubLink: "https://github.com/Bryanth87/Gest_coment.git",
      features: [
        "Api asincrona con Node.js",
        "Validación de token",
        "Middlewares personalizados",
        "Importaciones de dependencias",
        "Carga optimizada"
      ],
      learned: [
        "Estructuración de APIS",
        "Buenas prácticas de desarrollo",
        "Subir imagenes a la nube",
        "Prueba de endpoints con Postman"
      ]
    },
    {
      id: 4,
      title: "API de Registro de ventas",
      description: "API RESTful robusta para gestión de inventarios con documentación completa y pruebas automatizadas.",
      longDescription: "Backend completo para sistema de inventarios con autenticación JWT, documentación automática con Swagger, pruebas unitarias y de integración, y despliegue automatizado.",
      technologies: ["Node.js", "Express", "MongoDB", "Swagger, Postman"],
      category: "backend",
      githubLink: "https://github.com/Bryanth87/Registro_Ventas.git",
      features: [
        "API RESTful completa",
        "Documentación con Swagger",
        "Pruebas automatizadas (95% coverage)",
        "Autenticación JWT segura",
        "Logs y monitoreo integrado"
      ],
      learned: [
        "Arquitectura de APIs escalables",
        "Documentación profesional",
        "Mejores prácticas de desarrollo y seguridad"
      ]
    }
  ];

  const categories = [
    { value: "all", label: "Todos los Proyectos" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const sectionStyle = {
    padding: "4rem 2rem",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh"
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: "bold"
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "600px",
    margin: "0 auto 3rem auto"
  };

  const filterContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "3rem"
  };

  const filterButtonStyle = (isActive) => ({
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "25px",
    backgroundColor: isActive ? "#3498db" : "white",
    color: isActive ? "white" : "#3498db",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: `2px solid ${isActive ? "#3498db" : "#3498db"}`
  });

  const projectsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "2rem",
    marginTop: "2rem"
  };

  const projectCardStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <div
        style={{...projectCardStyle, position: "relative"}}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div style={{ padding: "1.5rem" }}>
          <h3 style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "0.5rem"
          }}>
            {project.title}
          </h3>

          <p style={{
            color: "#7f8c8d",
            lineHeight: "1.6",
            marginBottom: "1rem"
          }}>
            {showDetails ? project.longDescription : project.description}
          </p>

          {/* Tecnologías */}
          <div style={{ marginBottom: "1rem" }}>
            <h4 style={{ fontSize: "0.9rem", color: "#34495e", marginBottom: "0.5rem" }}>
              Tecnologías:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ecf0f1",
                    color: "#2c3e50",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    fontWeight: "500"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {showDetails && (
            <div style={{ marginTop: "1rem", borderTop: "1px solid #ecf0f1", paddingTop: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "0.9rem", color: "#34495e", marginBottom: "0.5rem" }}>
                  Características principales:
                </h4>
                <ul style={{ paddingLeft: "1rem", color: "#7f8c8d", fontSize: "0.9rem" }}>
                  {project.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "0.25rem" }}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "0.9rem", color: "#34495e", marginBottom: "0.5rem" }}>
                  Lo que aprendí:
                </h4>
                <ul style={{ paddingLeft: "1rem", color: "#7f8c8d", fontSize: "0.9rem" }}>
                  {project.learned.map((item, index) => (
                    <li key={index} style={{ marginBottom: "0.25rem" }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div style={{
            display: "flex",
            gap: "0.5rem",
            marginTop: "1rem"
          }}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "0.75rem",
                backgroundColor: "#34495e",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "bold",
                transition: "background-color 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#2c3e50"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#34495e"}
            >
              📁 GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "0.75rem",
                  backgroundColor: "#3498db",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
              >
                🚀 Demo
              </a>
            )}
          </div>

          <div style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#bdc3c7"
          }}>
            {showDetails ? "👆 Click para ocultar detalles" : "👆 Click para ver más detalles"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Mis Proyectos</h2>
        <p style={subtitleStyle}>
          Una colección de proyectos que demuestran mis habilidades en desarrollo web. 
          Cada proyecto incluye código fuente, demo en vivo y las tecnologías utilizadas.
        </p>

        {/* Filtros */}
        <div style={filterContainerStyle}>
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              style={filterButtonStyle(filter === category.value)}
              onMouseOver={(e) => {
                if (filter !== category.value) {
                  e.target.style.backgroundColor = "#3498db";
                  e.target.style.color = "white";
                }
              }}
              onMouseOut={(e) => {
                if (filter !== category.value) {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#3498db";
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div style={projectsGridStyle}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>
            ¿Interesado en trabajar juntos?
          </h3>
          <p style={{ color: "#7f8c8d", marginBottom: "1.5rem" }}>
            Siempre estoy abierto a nuevos proyectos y colaboraciones
          </p>
          <a
            href="#contact"
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#e74c3c",
              color: "white",
              textDecoration: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#c0392b"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#e74c3c"}
          >
            ¡Hablemos! 💬
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMe;