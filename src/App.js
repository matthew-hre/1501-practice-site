import React, { useState } from "react";
import { Prism } from "@mantine/prism";

function App() {
  const [questions] = useState([
    {
      id: 1,
      title: "Function Anatomy",
      body: "Given the following function:",
      snippet: "def funky(arg1: int) -> None:\n    print(arg1 ** 2)",
      question: "What line is known as the 'function head'?",
      answers: ["1"],
    },
    {
      id: 2,
      title: "Function Anatomy",
      body: "Given the following updated function:",
      snippet: `
      def funky(arg1: int) -> None:
    first_math = arg1 ** 2
	second_math = first_math / arg1
	third_math = second_math - first_math
	print(third_math + arg1)`,
      question: "At what line does the 'function body' begin?",
      answers: ["2"],
    },
    {
      id: 3,
      title: "Function Anatomy",
      body: "Given the same function as the last question:",
      snippet: `
		def funky(arg1: int) -> None:
	first_math = arg1 ** 2
	second_math = first_math / arg1
	third_math = second_math - first_math
	print(third_math + arg1)`,
      question: "How many variables are there? Careful with this one...",
      answers: ["4"],
    },
    {
      id: 4,
      title: "Function Anatomy",
      body: "Based on nothing but the given function head:",
      snippet: `
		  def my_really_really_massively_big_funny_funky_function_name(arg1: int, arg2: str, argument_the_third = None) -> int:`,
      question: "What type of data will this function return?",
      answers: ["int", "integer"],
    },
    {
      id: 5,
      title: "Function Anatomy",
      body: "",
      snippet: `# no code for this question`,
      question:
        "If a function doesn't return anything, it's known as a ___ function.",
      answers: ["void"],
    },

    {
      id: 6,
      title: "Stack Traces",
      body: "Given the following function:",
      snippet: `
	  	def triangles(width: float, height: int):
	width *= 2
	height -= 1
	a = 4
	b = 7.5
	width += (a - b)
	height = (height - a) + width
	return width * height`,
      question:
        "What would this function return, given the values 2.5 and 11 as arguments?",
      answers: ["11.25"],
    },
    {
      id: 7,
      title: "Stack Traces",
      body: "Given the following function:",
      snippet: `
		def format_real_nice(thingy: str):
	return f"The final answer is {thingy}!"`,
      question: "FINISH THIS",
      answers: ["11.25"],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [userAnswer, setUserAnswer] = useState("");

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user's answer is correct
    currentQuestion.answers.forEach((answer) => {
      if (userAnswer.toLowerCase() === answer) {
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
      }
    });
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800">
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
      </form>
    </div>
  );
}

export default App;
