import React from "react";
import { useState, useEffect } from "react";

const MessageInput = ({ send }) => {
  const [value, setValue] = useState();

  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your message..."
        value={value}
      />
      <button onClick={() => send(value)}>submit</button>
    </>
  );
};

export default MessageInput;
