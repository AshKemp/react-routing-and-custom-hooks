import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallBackExample() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memorizedCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memorizedCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <div>
      <h1>Use Callback</h1>
      <Counter countValue={countOne} onClick={memorizedCountOne} />
      <Counter countValue={countTwo} onClick={memorizedCountTwo} />
    </div>
  );
}

export default UseCallBackExample;
