import { theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

type themeProviderProps = {
    children: React.ReactNode,
}

export const ThemeProvider = ({children}: themeProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
};