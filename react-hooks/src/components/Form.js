import React, {useState, useRef} from "react";

export const Form = () => {
  let [name, setName] = useState("Nate");
  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };

  return (
    <div>
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};