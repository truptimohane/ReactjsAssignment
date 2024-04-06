import React, { useState, Suspense, lazy } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Loading from "./Pages/Loading.jsx";

const MarkdownPreview = lazy(() =>
  delayForDemo(import("./Pages/MarkdownPreview.jsx"))
);

function Lazy_Loading() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default Lazy_Loading;
