import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/pages/Login";
import Register from "./features/pages/Register";
import Dashboard from "./features/pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
