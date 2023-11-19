import { ThemeSwitcher } from "../../ThemeProvider";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="siteHeader">
      <div className="container">
        <div className="row">
          <div className={["col-12", styles.siteHeader__inner].join(" ")}>
            <div className={["h1", "m-0"].join(" ")}>Movie hub</div>
            <div className="theme">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
