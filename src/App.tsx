import "./App.css";

import CustomerIndex from "./CustomerIndex";
import CustomerLogin from "./CustomerLogin";
import CustomerReg from "./CustomerReg";
import CustomerForgot from "./CustomerForgot";
import CustomerHome from "./CustomerHome";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/" element={<CustomerIndex />}
        />

        {/* Login */}
        <Route
          path="/login" element={<CustomerLogin />}
        />

        {/* Registration */}
        <Route
          path="/registration" element={<CustomerReg />}
        />

        {/* Forgot Password */}
        <Route
          path="/forgotpass" element={<CustomerForgot />}
        />

        {/* Customer Home */}
        <Route
          path="/home" element={<CustomerHome />}
        />

        {/* Unknown URL → Landing Page */}
        <Route
          path="*" element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;