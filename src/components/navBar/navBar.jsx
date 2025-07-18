import React from "react";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#0D0D0D",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#FFFFFF",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const hoverStyles = {
    about: { backgroundColor: "#0057FF" },
    contact: { backgroundColor: "#FF007F" },
    dashboard: { backgroundColor: "#6A00FF" },
    projects: { backgroundColor: "#FF007F" },
    skills: { backgroundColor: "#0057FF" },
  };

  return (
    <nav style={navStyle}>
      <a
        href="#aboutMe"
        style={{ ...linkStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.about.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        About Me
      </a>
      <a
        href="#contactMe"
        style={{ ...linkStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.contact.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Contact Me
      </a>
      <a
        href="#dashboardPage"
        style={{ ...linkStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.dashboard.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Dashboard
      </a>
      <a
        href="#projectsMe"
        style={{ ...linkStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.projects.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Projects
      </a>
      <a
        href="#skillsMe"
        style={{ ...linkStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.skills.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Skills
      </a>
    </nav>
  );
};

export default Navbar;