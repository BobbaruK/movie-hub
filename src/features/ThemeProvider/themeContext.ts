// tasksContext;

import React, { Dispatch } from "react";
import { Theme, ThemeAction } from "./themeReducer";

interface ThemeContextType {
  theme: Theme;
  dispatch: Dispatch<ThemeAction>;
}

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default ThemeContext;
