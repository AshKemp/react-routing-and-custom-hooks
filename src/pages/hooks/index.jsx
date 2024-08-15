import { useEffect } from "react";
import { useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const getElementRef = divElementRef.current;
    inputRef.current.focus();
    getElementRef.style.color = "red";
    setTimeout(() => {
      getElementRef.style.color = "green";
    }, 2000);
  }, []);
  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }
  return (
    <div>
      <h1>Use ref, use callback and use memo hook</h1>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divElementRef}>Some random text</div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        ref={inputRef}
      />
    </div>
  );
}

export default Hooks;
