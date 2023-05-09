import { Link, NavLink } from 'react-router-dom';
import './FooterStyle.css';

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
          MS
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Acerca de Valve
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Steamworks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Empleo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Distribución de Steam
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Tarjetas regalo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              @steam
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
