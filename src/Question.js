import React from "react";
import { Prism } from "@mantine/prism";

function Question(props) {
  return (
    <>
      <p className="text-xl my-4 dark:text-gray-300">
        {props.currentQuestion.body}
      </p>
      <Prism language="py" withLineNumbers colorScheme="dark">
        {props.currentQuestion.snippet}
      </Prism>
      <p className="text-xl my-4 dark:text-gray-300">
        {props.currentQuestion.question}
      </p>
    </>
  );
}

export default Question;
