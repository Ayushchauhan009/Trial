import React from "react";
import {
  Home,
  Industries,
  Solutions,
  Products,
  Privacy,
  Cookie,
} from "./components/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/industries" Component={Industries} />
        <Route exact path="/solutions" Component={Solutions} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/privacy-policy" Component={Privacy} />
        <Route exact path="/cookie-policy" Component={Cookie} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
