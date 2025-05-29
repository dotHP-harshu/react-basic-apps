import React from "react";
import Header from "./components/navbar/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import BrandPage from "./pages/projectPages/BrandPage.jsx";
import DragNDrop from "./pages/projectPages/DragNDrop.jsx";
import Login from "./pages/projectPages/Login.jsx";
import MarkdownConverter from "./pages/projectPages/MarkdownConverter.jsx";
import MiniCart from "./pages/projectPages/MiniCart.jsx";
import CharacterCounter from "./pages/projectPages/CharacterCounter.jsx";
import TaskTacker from "./pages/projectPages/TaskTracker.jsx";
import Todos from "./pages/projectPages/Todos.jsx";
import DiceGame from "./pages/projectPages/DiceGame.jsx";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/brandpage",
    element: <BrandPage />,
  },
  {
    path: "/dicegame",
    element: <DiceGame />,
  },
  {
    path: "/dragndrop",
    element: <DragNDrop />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/markdownconverter",
    element: <MarkdownConverter />,
  },
  {
    path: "/minicart",
    element: <MiniCart />,
  },
  {
    path: "/charactercounter",
    element: <CharacterCounter />,
  },
  {
    path: "/tasktracker",
    element: <TaskTacker />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;