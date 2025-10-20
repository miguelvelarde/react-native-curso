import type { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr className="p-2">
      <td>
        <img src={user.avatar} alt="avatar" className="rounded-full w-14 p-2" />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
