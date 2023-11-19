export type Theme = "light" | "dark";

interface ThemeDark {
  type: "ChangeToDark";
}

interface ThemeLight {
  type: "ChangeToLight";
}

export type ThemeAction = ThemeDark | ThemeLight;

const themeReducer = (theme: Theme, action: ThemeAction): Theme => {
  const { type } = action;

  switch (type) {
    case "ChangeToDark":
      return "dark";

    case "ChangeToLight":
      return "light";

    default:
      return theme;
  }
};

export default themeReducer;
