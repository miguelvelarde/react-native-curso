import { useUsers } from "../hooks/UseUsers";
import { UserRow } from "./UserRow";

//https://reqres.in/api/users?page=2

export const UsersPage = () => {
  const { users, nextPage, previousPage } = useUsers();

  console.log(users);

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user}></UserRow>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={previousPage}
          className="p-2 bg-blue-500 text-white rounded-xl"
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 text-white rounded-xl"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
