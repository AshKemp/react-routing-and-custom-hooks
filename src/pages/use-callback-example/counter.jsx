import { memo } from "react";

/* eslint-disable react/prop-types */
function Counter({ countValue, onClick }) {
  console.log("this is getting rendered: ", countValue);
  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);
