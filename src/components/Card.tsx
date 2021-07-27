import React from "react";
import { Sub } from "../types/types";

interface Props {
  sub: Sub;
  setSubs: React.Dispatch<React.SetStateAction<Sub[]>>;
  subsc: Array<Sub>;
}

const Card = ({ sub, setSubs, subsc }: Props) => {
  const handleDelete = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSubs((): Sub[] => {
      return subsc.filter((subscriber: Sub) => subscriber.nick !== sub.nick);
    });
  };

  return (
    <div className='card-sub' key={sub.nick}>
      <button onClick={handleDelete}>Eliminar</button>
      <h3>{sub.nick}</h3>
      <img src={sub.pic} alt='' />
      <p>{sub.desc}</p>
    </div>
  );
};

export default Card;
