import React from "react";
import "./App.css";
import List from "./components/List";
import FormSubs from "./components/Form";

const INITIAL_STATE = [
  {
    nick: "Giorgio",
    pic: "https://i.pravatar.cc/150?u=agoiz",
    desc: "Web Developer Junior",
  },
  {
    nick: "Mariita",
    pic: "https://i.pravatar.cc/150?u=mariita",
    desc: "Data Scientist Expert",
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Subs List</h1>
      <List subsc={INITIAL_STATE} />
      <FormSubs />
    </div>
  );
}

export default App;
