import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/userActions";

function LoginPage() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/api/tokens",
      {
        user: userInput,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      dispatch(actions.setUser(response.data));
      history.push("/home");
    }
  };

  return (
    <div className="index">
      <div className="der">
        <svg viewBox="0 0 24 24" className="der__fondo">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <ul className="der__ul">
          <li className="der__li">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <p>Sigue lo que te interesa.</p>
          </li>
          <li className="der__li">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z"></path>
              </g>
            </svg>
            <p>Entérate de qué está hablando la gente.</p>
          </li>
          <li className="der__li">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <p>Únete a la conversación.</p>
          </li>
        </ul>
      </div>
      <div className="izq">
        <form onSubmit={handleSubmit} className="izq__form">
          <div className="form__input">
            <input
              value={userInput}
              type="text"
              id="nombre"
              name="username"
              required
              onChange={(e) => setUserInput(e.target.value)}
            />
            <label htmlFor="nombre">Teléfono, correo o usuar..</label>
          </div>
          <div className="form__input">
            <Link title="¿Olvidaste tu contraseña?">
              ¿Olvidaste tu contraseña?
            </Link>
            <input
              value={password}
              type="password"
              id="pass"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="pass">Contraseña</label>
          </div>
          <input
            className="form__submit"
            type="submit"
            value="Iniciar sesión"
          />
        </form>

        <div className="izq__centrado">
          <svg className="izq__logo" viewBox="0 0 24 24">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <h2 className="izq__h2">
            Mira lo que está pasando en el mundo en este momento
          </h2>

          <h3 className="izq__h3">Únete a Twitter hoy mismo.</h3>
          <Link className="izq__button boton-registrate" to="/registro">
            Regístrate
          </Link>
          <Link
            className="izq__button boton-iniciar"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div className="footer__buttons">
          <Link className="footer__button boton-registrate">Regístrate</Link>
          <Link
            className="footer__button boton-iniciar"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Iniciar sesión
          </Link>
        </div>

        <ul className="footer__ul">
          <li className="footer__li">
            <Link title="Acerca de">Acerca de</Link>
          </li>
          <li className="footer__li">
            <Link title="Centro de ayuda">Centro de ayuda</Link>
          </li>
          <li className="footer__li">
            <Link title="Condiciones de Servicio">Condiciones de Servicio</Link>
          </li>
          <li className="footer__li">
            <Link title="Política de Privacidad">Política de Privacidad</Link>
          </li>
          <li className="footer__li">
            <Link title="Política de cookies">Política de cookies</Link>
          </li>
          <li className="footer__li">
            <Link title="Información de anuncios">Información de anuncios</Link>
          </li>
          <li className="footer__li">
            <Link title="Blog">Blog</Link>
          </li>
          <li className="footer__li">
            <Link title="Estado">Estado</Link>
          </li>
          <li className="footer__li">
            <Link title="Empleos">Empleos</Link>
          </li>
          <li className="footer__li">
            <Link title="Recursos para marcas">Recursos para marcas</Link>
          </li>
          <li className="footer__li">
            <Link title="Publicidad">Publicidad</Link>
          </li>
          <li className="footer__li">
            <Link title="Marketing">Marketing</Link>
          </li>
          <li className="footer__li">
            <Link title="Twitter para empresas">Twitter para empresas</Link>
          </li>
          <li className="footer__li">
            <Link title="Desarrolladores">Desarrolladores</Link>
          </li>
          <li className="footer__li">
            <Link title="Guía">Guía</Link>
          </li>
          <li className="footer__li">
            <Link title="Configuración">Configuración</Link>
          </li>
          <li className="footer__li">© 2020 Twitter, Inc.</li>
        </ul>
      </footer>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Iniciar sesión
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="/login" method="POST">
                <label className="form-label" htmlFor="user">
                  Nombre de usuario o email
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="user"
                  name="username"
                />
                <label className="form-label" htmlFor="pass">
                  Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="pass"
                  name="password"
                />

                <input
                  className="form__submit"
                  type="submit"
                  value="Iniciar sesión"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
