import React, { useCallback, useState } from "react";
import {ITodo} from '../../Interfaces';
import "./form.css";

type IFormProps = {
  onFormSubmit: (data: object) => any;
};

const Form = ({ onFormSubmit }: IFormProps) => {


  let inputs: ITodo = {
    name: "",
    image: "https://play-lh.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK",
    phone: "",
    price: "",
    address: "",
    desc: "",
    country: "",
  };

  const [formState, setFormState] = useState<object>(inputs);

  const handleFormInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    },
    [formState, setFormState]
  );

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onFormSubmit(formState);
    },
    [onFormSubmit, formState]
  );

  return (
    <div>
      <h1>Forms</h1>
      <form className="form-add" action="" onSubmit={handleFormSubmit}>
        {Object.keys(formState).map((item, i) => (
          <input
            placeholder={item}
            onChange={handleFormInputChange}
            type="text"
            name={item}
            key={i}
            value={formState[item]}
          />
        ))}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Form;
