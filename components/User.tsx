import { FC, type ReactNode } from "react";
import { json } from "stream/consumers";
export type info = {
  name: "string ";
  age: number;
  email: string;
  location: string[];
};

const User: FC<info> = ({ name, age, email, location }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{email}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
  );
};

export default User;
