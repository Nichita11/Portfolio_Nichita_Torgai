import classNames from "classnames";
import {
  useTheme,
  useThemeDispatch,
} from "../contextWrappers/ThemeContextWrapper";
import styles from "./ThemeSwitcher.module.scss";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeSwitcher() {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  return (
    <div
      className={classNames(styles.input, {
        [styles.input_dark]: theme === "dark",
      })}
      onClick={() => {
        if (themeDispatch) {
          themeDispatch();
        }
      }}
    >
      <IconSun size={36} stroke={2} />
      <IconMoon size={36} stroke={2} />
    </div>
  );
}
