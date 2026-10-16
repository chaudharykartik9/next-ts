import { FC, type ReactNode } from "react";
import { info } from "./User";
type adminInfo = info & {
  admin: string;
};

const Admin: FC<adminInfo> = ({ name, age, email, location, admin }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{email}</li>
      <li>{JSON.stringify(location)}</li>
      <li>{admin}</li>
    </ul>
  );
};

export default Admin;
