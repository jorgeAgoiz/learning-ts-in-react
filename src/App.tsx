import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import FormSubs from "./components/Form";
import { Sub } from "./types/types";

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
interface AppState {
  subs: Array<Sub>;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>(INITIAL_STATE);

  useEffect(() => {}, [subs]);

  return (
    <div className='App'>
      <h1>Subs List</h1>
      <List subsc={subs} setSubs={setSubs} />
      <FormSubs onNewSub={setSubs} subs={subs} />
    </div>
  );
}

export default App;
