import { Link, NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../../features/ThemeProvider";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={[styles.siteHeader].join(" ")}>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container">
          <div className="collapse navbar-collapse">
            {" "}
            <Link to="/" className="navbar-brand">
              Movie hub
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  Movies
                </NavLink>
              </li>
            </ul>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
