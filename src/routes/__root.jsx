import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { CartContext } from "../contexts";
import Header from "../Header";
import PizzaOfTheDay from "../PizzaOfTheDay";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
