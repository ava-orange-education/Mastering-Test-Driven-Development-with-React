import React, { useState } from "react";
const Message = ({ text }) => {
  const [showText, setShowText] = useState(true);
  const toggleText = () => {
    setShowText(!showText);
  };
  return (
    <div>
      {showText && <p>{text}</p>}
      <button onClick={toggleText}>Toggle Text</button>;
    </div>
  );
};
export default Message;