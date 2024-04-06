import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div
        className="bg-image p-5 text-center shadow-1-strong  text-white"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")',
        }}
      >
        <h1 className="mb-3 p-5 h2">About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          praesentium labore accusamus sequi, voluptate debitis tenetur in
          deleniti possimus modi voluptatum neque maiores dolorem unde? Aut
          dolorum quod excepturi fugit.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
