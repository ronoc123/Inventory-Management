import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Register, Inventory, Transaction, Report } from "./pages/index";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="report" element={<Report />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
