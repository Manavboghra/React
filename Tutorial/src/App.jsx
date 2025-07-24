import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { User } from "./components/User";
import { MyButton } from "./components/MyButton";
import { UserImage } from "./components/UserImage";
import { List } from "./components/List";
import { App1 } from "./components/Toggle";
import { Greeting } from "./components/Greeting";
import Chatting from "./components/Chatting";
// import { ChatRoom } from "./components/Chatting";

// import createconnection from "./components/Chat";



function App() {

  return (
    <>
      <div>
        {/* <Header />
        <User />
        <MyButton/>
        <UserImage/> */}
        {/* <List/>
        <App1/>
        <Greeting user="Admin"/> */}
        <Chatting/> 
        {/* <ChatRoom/> */}
        
        
        
      </div>
    </>
  );
}



export default App;
