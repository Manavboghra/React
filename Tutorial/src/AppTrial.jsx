import React from "react";
import { WithoutMemo } from "./components/Hooks/UseMemo/WithoutMemo";
import { Sorting } from "./components/Hooks/UseMemo/Sorting";
import { CallbackCounter } from "./components/Hooks/UseCallback/CallbackCounter";
import { Practice1 } from "./components/Practice/Practice1";
import PrevValue from "./components/Hooks/UseRef/PrevValue";
import { Practice2 } from "./components/Practice/Practice2";
import { Practice3 } from "./components/Practice/Practice3";
import { DataContext } from "./components/Hooks/Context/DataContext";
import Profile from "./components/Hooks/Context/Profile";
import { Footer } from "./components/Hooks/Context/Footer";
import { ColorChanger } from "./Tasks/Task1";
import { Passgenerator } from "./Tasks/Task2";
import { ComponentA } from "./components/Hooks/Context/ComponentA";
import { Practice4 } from "./components/Practice/Practice4";
import Practice6 from "./components/Practice/Practice6";
import { DataFetching } from "./components/Hooks/CustomHook/DataFetching";

export const AppTrial = () => {
  return (
    <div >
      {/* <WithoutMemo numbers={[2,1,3,2,45,6]}/>  */}
      {/* <Sorting numbers={[2,1,3,2,45,6]}/>  */}
      {/* <CallbackCounter/> */}
      {/* <Practice1/> */}
      {/* <PrevValue/> */}
      {/* <Practice2 /> */}
      {/* <Practice3 /> */}
      {/* <DataContext /> */}
      {/* <Profile /> */}
      {/* <Footer /> */}
      {/* <ColorChanger/> */}
      {/* <Passgenerator/>
      <ComponentA/> */}
      {/* <Practice4/> */}
      {/* <Practice6/> */}
      <DataFetching/>
    </div>
  );
};
