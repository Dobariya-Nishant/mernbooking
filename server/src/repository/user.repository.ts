import { UserModel, UserType } from "../models";

function findUser(email: string) {
  let user = UserModel.findOne({
    email: email,
  });

  return user;
}

function createUser(user: UserType) {
  let newUser = new UserModel(user);

  return newUser.save();
}

export { findUser, createUser };
