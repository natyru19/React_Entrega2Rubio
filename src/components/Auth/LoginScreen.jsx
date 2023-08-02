import { useContext, useState } from "react";
import "./LoginScreen.css";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            value={values.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="form-control my-2"
            name="email"
          />
          <input
            value={values.password}
            onChange={handleInputChange}
            type="password"
            placeholder="Contraseña"
            className="form-control my-2"
            name="password"
          />

          <button className="btn btn-primary" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
