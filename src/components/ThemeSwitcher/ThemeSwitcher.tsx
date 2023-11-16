import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./ThemeSwitcher.module.scss";

type Theme = "dark" | "light";

const ThemeSwitcher = () => {
  const html = document.documentElement as HTMLElement;

  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    html.dataset.bsTheme = "dark";

    return () => {};
  }, []);

  return (
    <button
      className={[
        "btn",
        "btn-outline-secondary",
        styles.themeBtn,
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
  );
};

export default ThemeSwitcher;
