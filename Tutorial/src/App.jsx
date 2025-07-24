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
import Welcome from "./components/Welcome";
import { DataExtract } from "./components/DataExtract";
import Form from "./components/Form";
import { Conditional } from "./components/Conditional";
import { Render } from "./components/Render";
import { Referencing } from "./components/Referencing";
import { Counter } from "./components/Counter";
import { Hover } from "./components/Hover";
import { Wrapper } from "./components/Wrapper";

// import createconnection from "./components/Chat";

function App() {
  return (
    <>
      <div>
        {/* <Header /> */}
        <User />
        {/* <MyButton/> */}
        {/* <UserImage/> */}
        {/* <List/> */}
        {/* <App1/> */}
        {/* <Greeting user="Admin"/> */}
        {/* <Chatting/>  */}
        {/* <ChatRoom/> */}
        {/* <Welcome/> */}
        {/* <DataExtract/> */}
        {/* <Form/> */}
        {/* <Conditional/> */}
        {/* <Rander name = {(isLoggedin)=> isLoggedin ?"Admin":"Guest" }/> */}
        {/* <Referencing/> */}
        {/* <Counter/>
        <Hover/> */}
        <Wrapper
          render={({ count, handleClick }) => (
            <>
              <Counter count={count} handleClick={handleClick} />
            </>
          )}
        />
        <Wrapper
          render={({ count, handleClick }) => (
            <>
              <Hover count={count} handleClick={handleClick} />
            </>
          )}
        />

        {/* <Wrapper rander = {(count, handleClick)=>{<Counter count={count} handleClick={handleClick}/>}}/> */}

        <Render
          onFlag={false}
          Rander={(isOn) => {
            return isOn ? <div>Toggle is On </div> : <div>Toggle is off </div>;
          }}
        />
      </div>
    </>
  );
}

export default App;
