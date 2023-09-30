import { useEffect, useRef, useState } from "react";

export const PreviousState = () => {
  const [name, setName] = useState("");
  const prevValue = useRef("");
  const currValue = useRef();

  useEffect(() => {
    prevValue.current = name;
    currValue.current.style.background = "blue";
  }, [name]);

  return (
    <div style={{ display: "inline-block" }}>
      <p ref={currValue}>current name {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p ref={prevValue}> previousValue: {prevValue.current}</p>
    </div>
  );
};
