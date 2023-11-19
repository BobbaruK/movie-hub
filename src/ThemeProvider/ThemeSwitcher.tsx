import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./ThemeSwitcher.module.scss";
import useThemeContext from "./useThemeContext";

const ThemeSwitcher = () => {
  const { theme, dispatch } = useThemeContext();

  return (
    <>
      <button
        className={["btn", "btn-outline-secondary", styles.themeBtn].join(" ")}
        onClick={() =>
          dispatch({
            type: theme === "light" ? "ChangeToDark" : "ChangeToLight",
          })
        }>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </>
  );
};

export default ThemeSwitcher;
