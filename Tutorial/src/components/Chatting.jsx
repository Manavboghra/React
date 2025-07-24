import React from "react";
import createconnection from "./Chat";
import { useState, useEffect } from "react";
const url = "https://localhost:1234";

function ChatRoom({ roomID }) {
  useEffect(() => {
    const status = createconnection(roomID, url);
    status.connected();
    return () => {
      status.disconnected();
    };
  }, [roomID]);
  return <h1>Welcome to the {roomID} room!</h1>;
}
// export { ChatRoom };

export default function Chatting() {
  const [roomID, setRoomID] = useState("general");
  const [active, setActive] = useState(false);

  return (
    <>
      <label>
        Choose the chat room: {""}
        <select value={roomID} onChange={(e) => setRoomID(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? "Leave Room" : "Join Room"}{" "}
      </button>
      {active && <hr />}
      {active && <ChatRoom roomID={roomID} />}
    </>
  );
}
