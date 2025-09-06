import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// AsyncStorage is React Native’s simple, promise-based API for persisting small bits of data on a user’s device. Think of it as the mobile-app equivalent of the browser’s localStorage, but asynchronous and cross-platform.

export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#fdfdfd",
  surface: "#ffffff",
  text: "#0f172a", // deeper navy
  textMuted: "#64748b",
  border: "#e2e8f0",
  primary: "#2563eb", // vivid blue
  success: "#16a34a", // green-600
  warning: "#eab308", // amber-500
  danger: "#dc2626", // red-600
  shadow: "rgba(0,0,0,0.08)", // soft shadows
  gradients: {
    background: ["#fdfdfd", "#f1f5f9"],
    surface: ["#ffffff", "#f9fafb"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#22c55e", "#15803d"],
    warning: ["#facc15", "#ca8a04"],
    danger: ["#ef4444", "#b91c1c"],
    muted: ["#cbd5e1", "#94a3b8"],
    empty: ["#f1f5f9", "#e2e8f0"],
  },
  backgrounds: {
    input: "#ffffff",
    editInput: "#f8fafc",
  },
  statusBarStyle: "dark-content",
};

const darkColors: ColorScheme = {
  bg: "#0d1117", // deep GitHub-like dark
  surface: "#161b22", // subtle contrast
  text: "#f8fafc",
  textMuted: "#9ca3af",
  border: "#2d3748",
  primary: "#3b82f6", // glowing blue
  success: "#22c55e",
  warning: "#facc15",
  danger: "#f87171",
  shadow: "rgba(0,0,0,0.6)", // stronger shadow in dark
  gradients: {
    background: ["#0d1117", "#1e293b"],
    surface: ["#161b22", "#1e293b"],
    primary: ["#60a5fa", "#2563eb"],
    success: ["#34d399", "#15803d"],
    warning: ["#fbbf24", "#ca8a04"],
    danger: ["#f87171", "#b91c1c"],
    muted: ["#334155", "#475569"],
    empty: ["#1e293b", "#334155"],
  },
  backgrounds: {
    input: "#1e293b",
    editInput: "#111827",
  },
  statusBarStyle: "light-content",
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThem = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
