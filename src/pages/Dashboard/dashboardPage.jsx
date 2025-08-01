import React, { useState, useEffect } from "react";

const DashboardPage = ({ onEnterPortfolio }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  const handleRedirectToMain = () => {
    if (onEnterPortfolio) {
      onEnterPortfolio();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const homeElement = document.getElementById("home");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "¡Buenos días!";
    if (hour < 18) return "¡Buenas tardes!";
    return "¡Buenas noches!";
  };

  const stats = [
    { number: "3+", label: "Proyectos Completados", icon: "♨" },
    { number: "5+", label: "Tecnologías Dominadas", icon: "｡🇯‌🇸‌" },
    { number: "100%", label: "Dedicación", icon: "❤️" },
  ];

  const features = [
    { title: "Proyectos", description: "Trabajos realizados con demos en vivo", icon: "💼" },
    { title: "Contacto", description: "Información para conectar conmigo", icon: "📞" },
  ];

  const dashboardStyle = {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
  };

  const backgroundEffectsStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)
    `,
    animation: "float 8s ease-in-out infinite"
  };

  const containerStyle = {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    color: "white",
    padding: "2rem",
    transform: isAnimated ? "translateY(0)" : "translateY(30px)",
    opacity: isAnimated ? 1 : 0,
    transition: "all 1s ease-out"
  };

  const titleStyle = {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "linear-gradient(45deg, #06b6d4, #a855f7, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
  };

  const subtitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "white"
  };

  const descriptionStyle = {
    fontSize: "1.25rem",
    color: "#d1d5db",
    lineHeight: "1.8",
    maxWidth: "48rem",
    margin: "0 auto 3rem auto"
  };

  const timeContainerStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "1rem 2rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(16px)",
    borderRadius: "2rem",
    border: "1px solid rgba(255,255,255,0.2)",
    marginBottom: "3rem"
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1.5rem",
    marginBottom: "3rem",
    width: "100%",
    maxWidth: "800px"
  };

  const statBoxStyle = {
    padding: "1.5rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(16px)",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const buttonStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 2rem",
    background: "linear-gradient(45deg, #06b6d4, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "3rem",
    overflow: "hidden"
  };

  const infoContainerStyle = {
    padding: "2rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
    border: "1px solid rgba(255,255,255,0.2)",
    maxWidth: "64rem",
    width: "100%"
  };

  const featuresGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem"
  };

  const featureBoxStyle = {
    padding: "1rem",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    color: "#9ca3af",
    animation: "bounce 2s infinite"
  };

  return (
    <section id="dashboard" style={dashboardStyle}>
      {}
      <div style={backgroundEffectsStyle}></div>

      {}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              backgroundColor: "white",
              borderRadius: "50%",
              opacity: "0.3",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {}
      <div style={containerStyle}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          {}
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={titleStyle}>
              {getGreeting()}
            </h1>
            <h2 style={subtitleStyle}>Bienvenidos a mi portafolio</h2>
            <p style={descriptionStyle}>
              Soy <span style={{ color: "#06b6d4", fontWeight: "600" }}>Bryan</span>, tengo 18 años, estudio 
              "Périto en Computación" en Fundación Kinal. 
            </p>
          </div>

          {}
          <div style={timeContainerStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#d1d5db" }}>
              <span style={{ fontSize: "1.25rem" }}>📅</span>
              <span style={{ fontSize: "1.125rem" }}>{formatDate(currentTime)}</span>
            </div>
            <div style={{ width: "1px", height: "2rem", backgroundColor: "rgba(255,255,255,0.2)" }}></div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.25rem", color: "#06b6d4" }}>🕐</span>
              <span style={{ fontSize: "1.25rem", fontFamily: "monospace", fontWeight: "bold", color: "white" }}>
                {formatTime(currentTime)}
              </span>
            </div>
          </div>

          {}
          <div style={statsGridStyle}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={statBoxStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(168, 85, 247, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{stat.icon}</span>
                  <div style={{ fontSize: "1.875rem", fontWeight: "bold", color: "white" }}>{stat.number}</div>
                  <div style={{ fontSize: "0.875rem", color: "#d1d5db", textAlign: "center" }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {}
          <button
            onClick={handleRedirectToMain}
            style={buttonStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(168, 85, 247, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🚀</span>
            <span>Conoce más sobre mí</span>
          </button>

          {}
          <div style={infoContainerStyle}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>✨</span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>¿Qué encontrarás en mi portafolio?</h3>
            </div>

            <div style={featuresGridStyle}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={featureBoxStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "2rem" }}>{feature.icon}</span>
                    <div style={{ fontWeight: "600", color: "white" }}>{feature.title}</div>
                    <div style={{ fontSize: "0.875rem", color: "#9ca3af" }}>{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0px, 0px) scale(1); 
          }
          33% { 
            transform: translate(30px, -50px) scale(1.1); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9); 
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { 
            transform: translateX(-50%) translateY(0); 
          }
          40% { 
            transform: translateX(-50%) translateY(-10px); 
          }
          60% { 
            transform: translateX(-50%) translateY(-5px); 
          }
        }
        
        @media (max-width: 768px) {
          h1 { 
            font-size: 2.5rem !important; 
          }
          h2 { 
            font-size: 1.5rem !important; 
          }
          p { 
            font-size: 1rem !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default DashboardPage
