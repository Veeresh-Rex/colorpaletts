import React, { useState } from "react";
import "./Button.css";
import { Helmet } from "react-helmet";
import Colors from "./Colors";
import ButtonData from "./ButtonData";
const Button = () => {
  console.log(Colors.length);
  const [co, incCo] = useState(0);
  const incMent = () => {
    if (co === 27) incCo(co - 27);
    else incCo(co + 1);
  };
  return (
    <>
      <ButtonData value={Colors[co].backgroundColor} />
      <Helmet
        bodyAttributes={{
          style: `background-color: ${Colors[co].backgroundColor}`,
        }}
      />
      {/* {Colors[co].backgroundColor} */}
      <button className='btn' onClick={incMent}>
        Click Me <span role='img'>😍</span>
      </button>
    </>
  );
};
export default Button;
