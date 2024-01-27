import { UserType } from "../models";
import { createUser, findUser } from "../repository";

async function userExist(email: string) {
  const user = await findUser(email);
  if (user) {
    return true;
  }
  return false;
}

function createNewUser(user: UserType) {
  const newUser = createUser(user);
  return newUser;
}

export { userExist, createNewUser };
