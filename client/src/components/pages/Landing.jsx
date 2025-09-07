import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1>365BieneficiO</h1>
        <p>Un aplicativo para registrar alimentos utilizables y donarlos a quien lo necesite.</p>
      </header>

      <main className="landing-main">
        <section className="landing-info">
          <h2>¿Qué es 365BieneficiO?</h2>
          <p>
            Es una plataforma solidaria que permite registrar alimentos en buen estado para
            donarlos a quienes más los necesitan. Un puente entre quienes desean ayudar y quienes
            requieren apoyo.
          </p>
        </section>

        <div className="landing-ctas">
         
          {/* Botón para ir a UserList.jsx */}
          <Link className="btn secondary" to="/userlist" style={{ marginLeft: "1rem" }}>
            Lista de Usuarios
          </Link>

          {/* Botón para ir a AddUser.jsx */}
          <Link className="btn success" to="/add" style={{ marginLeft: "1rem" }}>
            Agregar Usuario
          </Link>
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2025 365BieneficiO - Alexa Pao Vas</p>
      </footer>
    </div>
  );
}
