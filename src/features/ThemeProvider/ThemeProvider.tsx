import { ReactNode, useReducer } from "react";
import ThemeContext from "./themeContext";
import themeReducer, { Theme } from "./themeReducer";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const initalTheme: Theme = "dark";
  const [theme, dispatch] = useReducer(themeReducer, initalTheme);
  const html = document.documentElement as HTMLElement;
  html.dataset.bsTheme = theme;

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
