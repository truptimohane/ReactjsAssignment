import React, { useState, Suspense, lazy } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Lazy_Loading from "./Pages/Lazy_Loading.jsx";
import Loading from "./Pages/Loading.jsx";

const MarkdownPreview = lazy(() =>
  delayForDemo(import("./Pages/MarkdownPreview.jsx"))
);

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lazyloading" element={<Lazy_Loading />} />
        </Routes>
      </BrowserRouter>

      <div className="container my-5">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />{" "}
        <br />
        <label>
          <input
            type="checkbox"
            checked={showPreview}
            onChange={(e) => setShowPreview(e.target.checked)}
          />
          Show preview
        </label>
        <hr />
        {showPreview && (
          <Suspense fallback={<Loading />}>
            <h2>Preview</h2>
            <MarkdownPreview markdown={markdown} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
