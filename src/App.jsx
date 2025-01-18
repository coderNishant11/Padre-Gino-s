import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
const queryCLient = new QueryClient();
const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryCLient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
