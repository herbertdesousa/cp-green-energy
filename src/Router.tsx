import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { PowerDetails } from "./pages/PowerDetails";
import { Layout } from "./pages/Layout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path=":powerSource" Component={PowerDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}