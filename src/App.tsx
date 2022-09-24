import "./App.css";
import AppRoutes from "./routes";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
