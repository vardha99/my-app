import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@salt-ds/theme/index.css";
import { SaltProvider, SaltProviderNext } from "@salt-ds/core";
import useTheme from "./helpers/useTheme.tsx";
import { BrowserRouter } from "react-router-dom";
// import "ag-grid-community/styles/ag-grid.css";
// import "@salt-ds/ag-grid-theme/salt-ag-theme.css";

const Root = () => {
  const theme = useTheme();
  return (
    <StrictMode>
      <SaltProvider mode={theme === "dark" ? "dark" : "light"}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SaltProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
