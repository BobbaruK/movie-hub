import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

type Theme = "dark" | "light";

const Header = () => {
  const html = document.documentElement as HTMLElement;

  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    html.dataset.bsTheme = "dark";

    return () => {};
  }, []);

  return (
    <header className="siteHeader">
      <div className="container">
        <div className="row">
          <div className={["col-12", styles.siteHeader__inner].join(" ")}>
            <h1>Movie hub</h1>
            <div className="theme">
              <button
                className={["btn", "btn-outline-secondary"].join(" ")}
                onClick={() => {
                  if (theme === "light") {
                    html.dataset.bsTheme = "dark";
                    setTheme(() => "dark");

                    return;
                  }

                  html.dataset.bsTheme = "light";
                  setTheme(() => "light");
                }}>
                {theme}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
