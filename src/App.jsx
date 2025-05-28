import React from "react";
import Header from "./components/navbar/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
