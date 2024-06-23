import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: "0px",
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Bienvenido al Chatbot de Asesorías de la
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.unicaribe.mx/"}
            >
              Universidad del Caribe
            </Link>
          </span>
          <br />
          🤖. ¡Tu asistente virtual para todas tus consultas académicas!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
