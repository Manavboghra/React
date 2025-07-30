import React, { useEffect, useRef, useState } from "react";

export const Message = () => {
  const [url, setUrl] = useState("192.168.1.1");
  const [toggle, setToggle] = useState(false);
  const prevurl = useRef(url);
  const prevtoggle = useRef(toggle);
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (prevurl.current !== url) {
      console.log("The IP is changed to ", url);
    } else if (prevtoggle.current !== toggle) {
      console.log(toggle ? "Chat Opened" : "Chat Closed");
    }
    prevurl.current = url;
    prevtoggle.current = toggle;

    return()=>{
        // window.console.clear()
    }
  }, [url, toggle]);

  return (
    <div>
      Url:
      <input type="text" onChange={handleChange} value={url} />
      <button onClick={handleClick}>Open Chat</button>
      {toggle ? <h1>{url}</h1> : null}
    </div>
  );
};
