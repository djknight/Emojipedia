import React from "react";
import Entry from "./Entry";

//1. Create a seperate "Entry" Component
//2. create Pops to replace hardcoded data
//.3 import the emojipedia const.
//3.1. Map though the emojipedia array and rander Entry components.

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      <Entry />
      <Entry />
      <Entry />
      </dl>
    </div>
  );
}

export default App;
