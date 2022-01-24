import { NewUser, UserInt } from "../types/user";
import User from "../db/models/User";

const signUp = async ({
  firstName,
  lastName,
  email,
  password,
}: NewUser): Promise<UserInt> => {
  //   const exists = await UserModel.find({ email });

  //   if (exists.length > 0) throw { status: 400, message: "email already exists" };

  const user: UserInt = await User.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
  return user;
};

export default signUp;
