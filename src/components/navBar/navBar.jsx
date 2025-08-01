import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyle = {
    backgroundColor: "rgba(13, 13, 13, 0.95)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FFFFFF",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    position: "relative"
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "rgba(13, 13, 13, 0.98)",
    padding: "1rem",
    backdropFilter: "blur(10px)"
  };

  const hamburgerStyle = {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    padding: "0.5rem"
  };

  const hamburgerLineStyle = {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    margin: "3px 0",
    transition: "0.3s"
  };

  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    navLinksStyle.display = "none";
    hamburgerStyle.display = "flex";
  }

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Inicio", icon: "🏠" },
    { id: "about", label: "Sobre mí", icon: "👨‍💻" },
    { id: "skills", label: "Habilidades", icon: "⚡" },
    { id: "projects", label: "Proyectos", icon: "💼" },
    { id: "contact", label: "Contacto", icon: "📞" }
  ];

  return (
    <nav style={navStyle}>
      <a href="#home" style={logoStyle} onClick={(e) => {
        e.preventDefault();
        smoothScroll("home");
      }}>
        &lt;Bryan.dev /&gt;
      </a>
      <ul style={navLinksStyle}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(item.id);
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={hamburgerStyle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div style={hamburgerLineStyle}></div>
        <div style={hamburgerLineStyle}></div>
        <div style={hamburgerLineStyle}></div>
      </div>

      <div style={mobileMenuStyle}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              ...linkStyle,
              padding: "1rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)"
            }}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(item.id);
            }}
          >
            <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;