import { useEffect, useState, useRef } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users-action";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersAction(1).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsersAction(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const previousPage = async () => {
    if (currentPageRef.current < 1) {
      return;
    } else {
      currentPageRef.current--;
      const users = await loadUsersAction(currentPageRef.current);
      setUsers(users);
    }
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
