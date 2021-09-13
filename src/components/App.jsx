import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Create a seperate "Entry" Component------- done
//2. create Pops to replace hardcoded data ....d
//.3 import the emojipedia const....d
//3.1. Map though the emojipedia array and rander Entry components....d

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
