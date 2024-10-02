import { createContext } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    theme: "light",
    setTheme: () => {}
});