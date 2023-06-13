import React, { useState } from "react";
import "./calc.css";

function Calc() {
  const [text, setText] = useState("");
  const operators = ["/", "*", "+", "-"];

  const block = () => {
    const ops = [];

    for (let i = 1; i < 10; i++) {
      ops.push(
        <button onClick={() => calcUpdate(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return ops;
  };

  const calculator = () => {
    setText(eval(text).toString());
  };

  const Clear = () => {
    setText("");
  };


  const calcUpdate = (value) => {
    if (
      (operators.includes(value) && text === "") ||
      (operators.includes(value) && operators.includes(text.slice(-1)))
    ) {
      return;
    }

    setText(text + value);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="header">
          <div className="result">{text || "0"}</div>
        </div>
        <div className="content">
          <div className="item1">
            <button onClick={Clear}>C</button>
            <button onClick={() => calcUpdate("/")}>/</button>
            <button onClick={() => calcUpdate("*")}>*</button>
            <button onClick={() => calcUpdate("-")}>-</button>
          </div>
          <div className="two-content">
            <div className="item2">{block()}</div>
            <div className="item3">
              <button className="item-percent">
                %
              </button>
              <button className="item-5" onClick={() => calcUpdate("+")}>
                +
              </button>
              <button className="operator-2" onClick={() => calcUpdate(".")}>
              .
            </button>
            </div>
          </div>
          <div className="three-content">
            <button className="operator-1" onClick={() => calcUpdate("0")}>
              0
            </button>
            <button className="operator" onClick={calculator}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
