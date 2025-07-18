import React from "react";

const projectsMe = () => {
  const projects = [
    {
      title: "E-commerce App",
      description: "Aplicación de comercio electrónico con React y Node.js.",
      link: "https://github.com/usuario/ecommerce-app",
    },
    {
      title: "Blog Personal",
      description: "Blog creado con Gatsby y GraphQL.",
      link: "https://github.com/usuario/blog-personal",
    },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ color: "#0A2540", textAlign: "center" }}>Proyectos</h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#2D9CDB" }}>
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default projectsMe;