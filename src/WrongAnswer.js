import React from "react";

function WrongAnswer(props) {
  return (
    <div>
      {props.userError === true && (
        <p className="pt-2 text-red-500 text-sm">❌ Incorrect answer!</p>
      )}
    </div>
  );
}

export default WrongAnswer;
