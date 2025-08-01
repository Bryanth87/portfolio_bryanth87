import React, { useState } from "react";
import DashboardPage from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/homePage/homePage";
import About from "./pages/aboutMe/aboutMe";
import SkillsMe from "./pages/skillsMe/skillsMe";
import ProjectsMe from "./pages/projectsMe/projectsMe";
import ContactMe from "./pages/contactMe/contactMe";
import FootBar from "./components/footBar/footBar";

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleEnterPortfolio = () => {
    setShowPortfolio(true);
    setTimeout(() => {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Dashboard de bienvenida - Solo se muestra si no se ha accedido al portafolio */}
      {!showPortfolio && (
        <DashboardPage onEnterPortfolio={handleEnterPortfolio} />
      )}
      
      {}
      {showPortfolio && (
        <>
          <HomePage />
          <About />
          <SkillsMe />
          <ProjectsMe />
          <ContactMe />
          <FootBar />
        </>
      )}
      
      {}
      {showPortfolio && (
        <button
          onClick={() => {
            setShowPortfolio(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "60px",
            height: "60px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
            transition: "all 0.3s ease",
            zIndex: 1000
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#2980b9";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#3498db";
            e.target.style.transform = "scale(1)";
          }}
          title="Volver al Dashboard"
        >
          🏠
        </button>
      )}
    </div>
  );
};

export default App;