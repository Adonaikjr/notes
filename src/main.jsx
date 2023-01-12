import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import GlobalStyle from "./GlobalStyle";
import theme from "./themes/theme";
import { AuthContextProvider } from "./hooks/context/contextAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <ToastContainer
          position="top-right"
          theme="dark"
        />
        <Routes />
      </AuthContextProvider>
     
    </ThemeProvider>
  </React.StrictMode>
);
