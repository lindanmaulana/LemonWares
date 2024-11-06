import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePages from "./pages/HomePages.tsx";
import PropsDrilingContextProvider from "./context/PropsDriling.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePages />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PropsDrilingContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PropsDrilingContextProvider>
  </StrictMode>
);
