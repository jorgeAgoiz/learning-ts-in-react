import React, { useState } from "react";
import { Sub } from "../types/types";

interface FormState {
  newSub: Sub;
}

interface Props {
  subs: Array<Sub>;
  onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>;
}

const FormSubs = ({ subs, onNewSub }: Props) => {
  const [newSub, setNewSub] = useState<FormState["newSub"]>({
    nick: "",
    pic: "",
    desc: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewSub({
      ...newSub,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub([...subs, newSub]);
  };

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='nick'
          id='nick'
          placeholder='Nick...'
        />
        <input
          onChange={handleChange}
          type='text'
          name='pic'
          id='pic'
          placeholder='Image...'
        />
        <input
          onChange={handleChange}
          type='text'
          name='desc'
          id='desc'
          placeholder='Description...'
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default FormSubs;
