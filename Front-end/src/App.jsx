import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  let routes = createBrowserRouter([
    { path: "/", element: <Layout setMode={setMode} /> },
  ]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
