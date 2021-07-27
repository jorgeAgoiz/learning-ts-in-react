import React from "react";
import Card from "./Card";
import { Sub } from "../types/types";

interface Props {
  subsc: Array<Sub>;
}

const List = ({ subsc }: Props) => {
  return (
    <div>
      {subsc.map((sub) => {
        return <Card sub={sub} />;
      })}
    </div>
  );
};

export default List;
