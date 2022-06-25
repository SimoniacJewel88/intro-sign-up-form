import { useState } from "react";
import Alerta from "./Alerta";
import "./formulario.css";
import iconoError from "../images/icon-error.svg";

function Formulario({
  nombre, 
  setNombre, 
  apellido,
  setApellido,
  email, 
  setEmail,
  password, 
  setPassword
}) {

  const [alertas, setAlertas] = useState({});

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    correoBis: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  };

  const handleChange = (e) => {
    setNombre(e.target.value);
  }

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch(name) {
      case 'nombre':
        if(value.length <= 0){
          console.log("First Name cannot be empty");
          setAlertas({...alertas, nombre: true});
          return;
        }
        setNombre(value);
        setAlertas({...alertas, nombre: false});
        break;
      case 'apellido':
        if(value.length <= 0){
          console.log("Last Name cannot be empty");
          setAlertas({...alertas, apellido: true});
          return;
        }
        setAlertas({...alertas, apellido: false});
        setApellido(value);
        break;
      case 'email':
        if(expresiones.correo.test(value)){
          setEmail(value);
          setAlertas({...alertas, email: false});
          return;
        }
        setAlertas({...alertas, email: true});
        console.log("Looks like this is not an email");
        break;
      case 'password':
        if(value.length <= 0){
          console.log("Password cannot be empty");
          setAlertas({...alertas, password: true});
          return;
        }
        setPassword(value);
        setAlertas({...alertas, password: false});
        break;
      default:
        break;
    }
    // console.log(e.target.name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre === '' || apellido === '' || email === '' || password === '') {
      console.log("Faltan campos");
      return;
    }
    setAlertas({nombre: false, apellido:false, email:false, password:false})
    // Resetear FORMULARIO
  }
  return (
    <form className="forms" onSubmit={handleSubmit}>
      <div className="row">
        <div className="relative">
          <input 
            type="text" 
            placeholder="First Name" 
            name="nombre"
            onBlur={handleBlur}
          />
          {alertas.nombre && <img class="icono-error" src={iconoError} alt="icono error"/> }
          {alertas.nombre && <Alerta mensaje={"First Name cannot be empty"}/>}
          
        </div>
        <div className="relative">
          <input
            type={"text"}
            placeholder="Last Name"
            onBlur={handleBlur}
            name="apellido"
          />
          {alertas.apellido && <img class="icono-error" src={iconoError} alt="icono error"/> }
          {alertas.apellido && <Alerta mensaje={"Last Name cannot be empty"}/>}
          
        </div>
        <div className="relative">
          <input
            type={"email"}
            placeholder="Email Address"
            // onBlur={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            name="email"
          />
          {alertas.email && <img class="icono-error" src={iconoError} alt="icono error"/> }
          {alertas.email && <Alerta mensaje={"Looks like this is not an email"}/>}
          
        </div>
        <div className="relative">
          <input
            type={"password"}
            placeholder="Password"
            // onBlur={(e) => setPassword(e.target.value)}
            onBlur={handleBlur}
            name="password"
          />
          {alertas.password && <img class="icono-error" src={iconoError} alt="icono error"/> }
          {alertas.password && <Alerta mensaje={"Password cannot be empty"}/>}

        </div>
        <div>
          <input 
            type="submit" 
            value="CLAIM YOUR FREE TRIAL" 
          />
        </div>
        <p className="terminos">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
      </div>
    </form>
  );
}

export default Formulario;
