import React from "react";
import { Link, Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(formData.name);
}

const FormActionData = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button>Enviar</button>
    </form>
  );
};

export default FormActionData;
