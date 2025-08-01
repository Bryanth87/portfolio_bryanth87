import React from "react";

const SkillsMe = () => {
  const skills = [
    { name: "JavaScript", level: 95, color: "#f7df1e", icon: "</>" },
    { name: "React", level: 85, color: "#61dafb", icon: "⚛️" },
    { name: "HTML", level: 85, color: "#e34f26", icon: "🔸" },
    { name: "CSS", level: 80, color: "#1572b6", icon: "🎨" },
    { name: "Node.js", level: 85, color: "#339933", icon: "🟢" },
    { name: "Git", level: 90, color: "#f05032", icon: "🔀" },
    { name: "MySQL", level: 80, color: "#4479a1", icon: "🗄️" },
    { name: "Java", level: 85, color: "#3776ab", icon: "☕♨" }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Netbeans", icon: "🎨" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "🌐" },
    { name: "Vite", icon: "⚡" }
  ];

  const sectionStyle = {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "3rem",
    fontWeight: "bold"
  };

  const skillsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem"
  };

  const skillCardStyle = {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease"
  };

  const skillBarStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem"
  };

  const skillNameStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#34495e"
  };

  const progressContainerStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ecf0f1",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "0.5rem"
  };

  const toolsContainerStyle = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    marginTop: "2rem"
  };

  const toolsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginTop: "1rem"
  };

  const toolItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  const ProgressBar = ({ skill }) => {
    const progressStyle = {
      width: `${skill.level}%`,
      height: "100%",
      backgroundColor: skill.color,
      borderRadius: "10px",
      transition: "width 2s ease-in-out",
      boxShadow: `0 0 10px ${skill.color}50`
    };

    return (
      <div>
        <div style={skillBarStyle}>
          <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{skill.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={skillNameStyle}>{skill.name}</div>
            <div style={progressContainerStyle}>
              <div style={progressStyle}></div>
            </div>
            <span style={{ fontSize: "0.9rem", color: "#7f8c8d", fontWeight: "bold" }}>
              {skill.level}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  const CircularProgress = ({ skill }) => {
    const radius = 45;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <svg
            height={radius * 2}
            width={radius * 2}
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              stroke="#ecf0f1"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke={skill.color}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 2s ease-in-out"
              }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: skill.color
          }}>
            {skill.level}%
          </div>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>{skill.icon}</span>
          <div style={{ fontWeight: "bold", color: "#34495e" }}>{skill.name}</div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Habilidades Técnicas</h2>
        
        <div style={skillsGridStyle}>
          <div style={skillCardStyle}>
            <h3 style={{ color: "#3498db", marginBottom: "1.5rem", textAlign: "center" }}>
               Lenguajes y Frameworks
            </h3>
            {skills.slice(0, 4).map((skill, index) => (
              <ProgressBar key={index} skill={skill} />
            ))}
          </div>

          <div style={skillCardStyle}>
            <h3 style={{ color: "#e74c3c", marginBottom: "1.5rem", textAlign: "center" }}>
              🛠️ Tecnologías Backend
            </h3> 
            {skills.slice(4, 8).map((skill, index) => (
              <ProgressBar key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div style={{
          ...skillCardStyle,
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          <h3 style={{ color: "#9b59b6", marginBottom: "2rem" }}>
            🌟 Habilidades Destacadas
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1rem",
            justifyItems: "center"
          }}>
            {skills.slice(0, 4).map((skill, index) => (
              <CircularProgress key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div style={toolsContainerStyle}>
          <h3 style={{ color: "#f39c12", textAlign: "center", marginBottom: "1rem" }}>
            🔧 Herramientas y Tecnologías
          </h3>
          <div style={toolsGridStyle}>
            {tools.map((tool, index) => (
              <div
                key={index}
                style={toolItemStyle}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{tool.icon}</span>
                <span style={{ fontWeight: "bold", color: "#34495e" }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...toolsContainerStyle, marginTop: "2rem" }}>
          <h3 style={{ color: "#16a085", textAlign: "center", marginBottom: "1rem" }}>
            🧠 Habilidades Blandas
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {[
              { name: "Trabajo en Equipo", icon: "👥" },
              { name: "Resolución de Problemas", icon: "🧩" },
              { name: "Comunicación Efectiva", icon: "💬" },
              { name: "Aprendizaje Rápido", icon: "📚" },
              { name: "Creatividad", icon: "💡" },
            ].map((skill, index) => (
              <div key={index} style={{
                ...toolItemStyle,
                padding: "1.5rem",
                flexDirection: "column",
                textAlign: "center"
              }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{skill.icon}</span>
                <span style={{ fontWeight: "bold", color: "#34495e" }}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMe;