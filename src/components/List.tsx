import React from "react";
import Card from "./Card";
import { Sub } from "../types/types";

interface Props {
  subsc: Array<Sub>;
  setSubs: React.Dispatch<React.SetStateAction<Sub[]>>;
}

const List = ({ subsc, setSubs }: Props) => {
  const deleteSub = () => {
    console.log(subsc);
  };

  return (
    <div>
      {subsc.map((sub) => {
        return <Card sub={sub} />;
      })}
    </div>
  );
};

export default List;
