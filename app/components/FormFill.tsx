"use client";

import { log } from "console";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { FormEvent, useReducer, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const FormFill = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [submittedName, setSubmittedName] = useState();
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordval = name.current!.value;
    console.log(nameVal, emailVal, passwordval);
    setFormData({name: nameVal  , email:emailVal , password:passwordval})
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={name} />
        <input type="text" placeholder="email" ref={email} />
        <input type="text" placeholder="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
      <section>
        <h2>Name : {formData.name}</h2>
        <h2>gmail : {formData.email}</h2>
      </section>
    </>
  );
};

export default FormFill;
