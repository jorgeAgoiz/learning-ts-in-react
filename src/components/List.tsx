import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Sub } from "../types/types";

interface Props {
  subsc: Array<Sub>;
}

interface AppState {
  subs: Array<Sub>;
}

const List = ({ subsc }: Props) => {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    setSubs(subsc);
  }, [subs, subsc]);

  return (
    <div>
      {subs.map((sub) => {
        return <Card sub={sub} />;
      })}
    </div>
  );
};

export default List;
