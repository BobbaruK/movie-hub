import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import styles from "./Header.module.scss";

// TODO: separate theme code into a hook or something
type Theme = "dark" | "light";

const Header = () => {
  const html = document.documentElement as HTMLElement;

  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    html.dataset.bsTheme = "dark";

    return () => {};
  }, []);

  return (
    <header className="siteHeader">
      <div className="container">
        <div className="row">
          <div className={["col-12", styles.siteHeader__inner].join(" ")}>
            <div className={["h1", "m-0"].join(" ")}>Movie hub</div>
            <div className="theme">
              <button
                className={[
                  "btn",
                  "btn-outline-secondary",
                  styles.siteHeader__themeBtn,
                ].join(" ")}
                onClick={() => {
                  if (theme === "light") {
                    html.dataset.bsTheme = "dark";
                    setTheme(() => "dark");

                    return;
                  }

                  html.dataset.bsTheme = "light";
                  setTheme(() => "light");
                }}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
