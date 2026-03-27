import axios from "axios";
import type { UserListResponse } from "../interfaces/reqres.response";

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
        headers: { "x-api-key": "reqres_a816e02036534218a53f74865c54ebae" },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
