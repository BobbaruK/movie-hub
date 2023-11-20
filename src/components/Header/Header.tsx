import { Link, NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../../ThemeProvider";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={[styles.siteHeader].join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand bg-body-tertiary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse">
                  {" "}
                  <Link to="/" className="navbar-brand">
                    Movie hub
                  </Link>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link" aria-current="page">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/test" className="nav-link">
                        Test
                      </NavLink>
                    </li>
                  </ul>
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
