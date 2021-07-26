import React from "react";

const FormSubs = () => {
  return (
    <div className='form-div'>
      <form>
        <input type='text' name='nick' id='nick' />
        <input type='text' name='pic' id='pic' />
        <input type='text' name='desc' id='desc' />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default FormSubs;
