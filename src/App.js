import React, { useState } from "react";
import { Prism } from "@mantine/prism";
import { comp_questions } from "./questions.js";

function App() {
  const [questions] = useState(comp_questions);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [userError, setUserError] = useState(false);

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user's answer is correct
    let isCorrect = false;
    currentQuestion.answers.forEach((answer) => {
      if (userAnswer.toLowerCase() === answer) {
        isCorrect = true;
        // If it is, get the next question
        const nextQuestion = questions.find(
          (q) => q.id === currentQuestion.id + 1
        );

        // If there is a next question, set it as the current question
        if (nextQuestion) {
          setCurrentQuestion(nextQuestion);
          setUserAnswer("");
        } else {
          alert("you win!");
        }
        return;
      }
    });

    // If the user's answer was incorrect, set the userError state to true
    setUserError(!isCorrect);
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 h-screen">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-300">
        {currentQuestion.title}
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="text-xl my-4 dark:text-gray-300">
          {currentQuestion.body}
        </p>
        <Prism language="py" withLineNumbers colorScheme="dark">
          {currentQuestion.snippet}
        </Prism>
        <p className="text-xl my-4 dark:text-gray-300">
          {currentQuestion.question}
        </p>
        <input
          className="border p-2 rounded text-white dark:border-gray-700 dark:bg-gray-700"
          type="text"
          value={userAnswer}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 px-4 py-2 mx-2 rounded-full text-white dark:bg-slate-600"
          type="submit"
        >
          Submit
        </button>
        <div>
          {userError === true && (
            <p className="py-2 text-red-500 text-sm">❌ Incorrect answer!</p>
          )}
        </div>
      </form>
      <footer className="bottom-0 w-full py-6 text-gray-500 text-sm">
        made by cool matt for 2022's 1501 class, cause he's just that cool.
        <br />
        made with react and tailwind, as well as prism for code boxes.
        <br />
        thanks to dylan for tailwind boilerplate and colton for beta testing.
        <br />
        and my gf liv for telling me my site looks nice :)
      </footer>
    </div>
  );
}

export default App;
