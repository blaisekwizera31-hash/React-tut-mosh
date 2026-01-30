
import { useEffect, useRef } from "react";

const input = () => {
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  useEffect(() => {
     document.title = "My first React App";  
});
  const inputRef = useRef<HTMLInputElement>(null);
  if (inputRef.current) inputRef.current.focus();
  return (
    <input
      ref={inputRef}
      id="description"
      type="text"
      className="form-control"
    />
  );
};

export default input;
