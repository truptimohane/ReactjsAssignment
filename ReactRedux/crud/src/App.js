import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Pages/Login";

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
          {/* <Route
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
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
