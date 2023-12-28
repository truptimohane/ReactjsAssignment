import React, { useState } from "react";

export default function Listview() {
  const [questions, setQuestions] = useState([
    // create state for list view
    {
      id: 1,
      question: "THE 'REACT WAY' TO RENDER LIST ",
      options: [
        "Use Array.map",
        "Not a for loop",
        "Give each item a unique key",
        "Avoid using array index as the key",
      ],
      // correctAnswer: ["Use Array.map"],
      selectedOptions: [], //For select Some options
    },
  ]);

  // For choose options
  const handleOptionSelect = (questionId, option) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => {
        if (q.id === questionId) {
          const selectedOptions = q.selectedOptions.includes(option)
            ? q.selectedOptions.filter((selected) => selected !== option)
            : [...q.selectedOptions, option];

          return { ...q, selectedOptions };
        } else {
          return q;
        }
      })
    );
  };

  return (
    <>
      <div className="list-view">
        {questions.map((q) => (
          <div key={q.id}>
            <h1 className="Question">{q.question}</h1>
            <ul>
              {q.options.map((option) => (
                <li key={option}>
                  <label className="custom-checkbox-label">
                    {/* For checkbox */}
                    <input
                      className="custom-checkbox-input"
                      type="checkbox"
                      name={`question_${q.id}`}
                      value={option}
                      checked={q.selectedOptions.includes(option)}
                      onChange={() => handleOptionSelect(q.id, option)}
                    />

                    {/* for options */}
                    <span className="custom-checkbox-text">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
