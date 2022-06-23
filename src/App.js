import { useState } from "react";
import Formulario from "./components/Formulario";
import "./app.css"

function App() {
  // Definir un estado
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="topic">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>

      </div>
      <div className="formulario">
        <div className="mini-header">
          <h3><span>Try it free 7 days</span> then $20/mo. thereafter</h3>
        </div>
        <Formulario
          nombre={nombre}
          setNombre={setNombre} 
          apellido={apellido}
          setApellido={setApellido}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>
      
    </div>
  );
}

export default App;
