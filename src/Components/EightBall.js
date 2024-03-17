import React, { useState } from "react";

import "../EightBall.css";
import defaultAnswers from "../answers.json"
import { choice } from "../random";

const EightBall = ({answers = defaultAnswers}) => {
    const [answer, setAnswer] = useState({
        msg: "What is your question?",
        color: "black",
    });

    const handleClick = (e) => {
        setAnswer(choice(answers));
    }

    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
          <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;