import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [base, setBase] = useState();
  const [exponent, setExponent] = useState();

  const inputChangeHandler = (e, type) => {
    if (type === "base") {
      setBase(e.target.value);
    } else if (type === "exponent") {
      setExponent(e.target.value);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://s7uwt99beh.execute-api.ap-southeast-2.amazonaws.com/dev",
      {
        base: base,
        exponent: exponent,
      }
    );
    console.log(response);
  };

  const callAPI = (base, exponent) => {};
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Base Number:</label>
      <input
        type='text'
        id='base'
        onChange={(e) => inputChangeHandler(e, "base")}
      />
      <label>Power Number: </label>
      <input
        type='text'
        id='exponent'
        onChange={(e) => inputChangeHandler(e, "exponent")}
      />
      <button type='submit'>Calculate</button>
    </form>
  );
};

export default Home;
