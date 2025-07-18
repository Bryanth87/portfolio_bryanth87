import React from "react";

const skillsMe = () => {
  const skills = [
    { name: "React", level: "90%" },
    { name: "Node.js", level: "80%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "95%" },
  ];

  return (
    <section style={{ padding: "2rem", background: "#f8f9fa" }}>
      <h2 style={{ color: "#0A2540", textAlign: "center" }}>Habilidades</h2>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{skill.name}</strong>: {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default skillsMe;