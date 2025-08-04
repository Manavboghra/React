import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Basics/Beginner/Header";
import { User } from "./components/Basics/User/User";
import { MyButton } from "./components/Basics/Button/MyButton";
import { UserImage } from "./components/Basics/User/UserImage";
import { List } from "./components/Basics/Beginner/List";
import { App1 } from "./components/Basics/Button/Toggle";
import { Greeting } from "./components/Basics/Props/Greeting";
import Chatting from "./components/Hooks/UseEffect/Chatting";
// import { ChatRoom } from "./components/Chatting";
import Welcome from "./components/Basics/User/Welcome";
import { DataExtract } from "./components/Basics/DataExtraction/DataExtract";
import Form from "./components/Hooks/UseState/Form";
import { Conditional } from "./components/Basics/Button/Conditional";
// import { Render } from "./components/Render";
import { Referencing } from "./components/Hooks/UseRef/Referencing";
import { Counter } from "./components/Basics/Button/Counter";
import { Hover } from "./components/Basics/Button/Hover";
import { Wrapper } from "./components/Basics/Props/Wrapper";
import { Event } from "./components/Events/Event";
import { AlertButton } from "./components/Basics/Button/AlertButton";
import { AlertMessage, ToolBar } from "./components/Basics/Props/ToolBar";
import CaptureExample from "./components/Basics/Props/Render";
import Signup, { SignupDefault } from "./components/Basics/Props/PreventDefault";
import { UpdatedFunc } from "./components/HOC/UpdatedFunc";
import UserIdentity from "./components/HOC/UserIdentity";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import NewHover from "./components/HOC/NewHover";
import NewUpdatedFunc from "./components/HOC/NewUpdatedFunc";
import { AsyncCounter } from "./components/HOC/AsyncCounter";
import { Count } from "./components/Hooks/Reducer/count";
import { ActionForm } from "./components/Hooks/Reducer/ActionForm";
import { EffectTest } from "./components/Hooks/UseEffect";
import { Timer } from "./components/Hooks/UseEffect/Timer";
import { LimitedCounter } from "./components/Hooks/Reducer/counter";
import { Message } from "./components/Hooks/UseEffect/Message";
import { DataFetch } from "./components/Hooks/UseEffect/DataFetch";
import Focus from "./components/Hooks/UseRef/Focus";
import { Remove } from "./components/Hooks/UseRef/Remove";
import Page from "./components/Hooks/UseRef/Main";
import { DoubleNumber } from "./components/Hooks/UseMemo/DoubleNumber";
import { FindItems } from "./components/Hooks/UseMemo/FindItems";
import { Car } from "./components/Hooks/UseState/Car";
import { SetTime } from "./components/Hooks/UseEffect/SetTime";
import { CountRender } from "./components/Hooks/UseRef/CountRender";
import { Footer } from "./components/Hooks/Context/Footer";
import Profile from "./components/Hooks/Context/Profile";
import SetUsername from "./components/Hooks/CustomHook/SetUsername";
import { Sorting } from "./components/Hooks/UseMemo/Sorting";
import { WithoutMemo } from "./components/Hooks/UseMemo/WithoutMemo";
import { ColorChanger } from "./Tasks/Task1";
// import { CounterReducer } from "./components/Hooks/Reducer/count";
// import createconnection from "./components/Chat";

function App() {
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <User /> */}
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
        {/* <Counter/> */}
        {/* <Hover/> */}
        {/* <Wrapper
          render={({ count, handleClick }) => (
            <>
              <Counter count={count} handleClick={handleClick} />
            </>
          )}
        /> */}
        {/* <Wrapper
          render={({ count, handleClick }) => (
            <>
              <Hover count={count} handleClick={handleClick} />
            </>
          )}
        /> */}

        {/* <Wrapper rander = {(count, handleClick)=>{<Counter count={count} handleClick={handleClick}/>}}/> */}

        {/* <Render
          onFlag={false}
          render={(isOn) => {
            return isOn ? <div>Toggle is On </div> : <div>Toggle is off </div>;
          }}
        /> */}
        {/* <Event /> */}
        {/* <AlertButton/> */}

        {/* <ToolBar/> */}
        {/* <AlertMessage/> */}
        {/* <CaptureExample/> */}
        {/* <Signup/> */}
        {/* <SignupDefault/> */}
        {/* <UpdatedFunc/> */}
        {/* <UserIdentity/> */}
        {/* <ClickCounter/> */}
        {/* <HoverCounter/> */}
        {/* <NewHover/> */}
        {/* <NewUpdatedFunc/> */}
        {/* <AsyncCounter/> */}
        {/* <Count/> */}
        {/* <ActionForm/> */}
        {/* <CounterReducer/> */}
        {/* <EffectTest/> */}
        {/* <LimitedCounter/> */}
        {/* <Timer/> */}
        {/* <Message/> */}
        {/* <DataFetch/> */}
        {/* <Focus/> */}
        <br />
        {/* <Remove/> */}
        {/* <Page/> */}
        {/* <DoubleNumber/> */}
        {/* <Car/> */}
        <Timer />
        {/* <SetTime/> */}
        {/* <CountRender/> */}
        {/* <Profile/>
        <Footer/>
        <SetUsername/> */}
        {/* <Sorting numbers={[12,10,13,14,2]}/> */}
        {/* <WithoutMemo /> */}
        <ColorChanger/>
      </div>
    </>
  );
}

export default App;