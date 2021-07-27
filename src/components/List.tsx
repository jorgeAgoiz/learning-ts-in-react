import React from "react";
import Card from "./Card";
import { Sub } from "../types/types";

interface Props {
  subsc: Array<Sub>;
  setSubs: React.Dispatch<React.SetStateAction<Sub[]>>;
}

const List = ({ subsc, setSubs }: Props) => {
  return (
    <div>
      {subsc.map((sub) => {
        return <Card sub={sub} setSubs={setSubs} subsc={subsc} />;
      })}
    </div>
  );
};

export default List;
