import React from 'react';
import {Introduction} from "./pages/main/Introduction";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      children:
          [
              {
                path: "/",
                element: <Introduction/>
              }
              ]
    }
    ]
)

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
