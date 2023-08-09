import React from "react";

const Message = ({ messages }) => {
  return (
    <div>
      {messages &&
        messages.map((message, index) => {
          return <div key={index}>{message}</div>;
        })}
    </div>
  );
};

export default Message;
