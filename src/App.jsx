import React from "react";
import Background from "./assets/component/Background";
import Foreground from "./assets/component/Foreground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground/>
      
    </div>
  );
}
export default App;
