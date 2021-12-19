import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider } from "./ThemeProvider";

export const Box = () => {
    const theme = useContext(ThemeContext);

    return (
            <div style={{ background: theme.light.main, color: theme.light.text }}>
            Hello baby
            </div>
    )
};