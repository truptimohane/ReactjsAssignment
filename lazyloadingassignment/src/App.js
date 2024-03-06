import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Lazyloading from "./pages/Lazy_loading";

// Lazily loaded components
const lazyloading = React.lazy(() => import("./pages/Lazy_loading"));
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/lazyloading"
            element={
              <>
                {/* Header component for the Product page */}
                <Header />
                {/* Container to center content vertically and horizontally */}
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{ minHeight: "85vh" }}
                >
                  {/* Use React.Suspense for lazy loading the Product component */}
                  <Suspense
                    fallback={
                      // Fallback UI while Product component is being loaded
                      <>
                        <div class="text-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </>
                    }
                  >
                    {/* Render the Product component */}
                    <Lazyloading />
                  </Suspense>
                </div>
                {/* Footer component for the Product page */}
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
