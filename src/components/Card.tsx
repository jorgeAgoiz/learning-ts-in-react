import React from "react";
import { Sub } from "../types/types";

interface Props {
  sub: Sub;
}

const Card = ({ sub }: Props) => {
  return (
    <div className='card-sub' key={sub.nick}>
      <h3>{sub.nick}</h3>
      <img src={sub.pic} alt='' />
      <p>{sub.desc}</p>
    </div>
  );
};

export default Card;
