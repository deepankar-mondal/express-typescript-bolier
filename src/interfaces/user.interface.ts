import mongoose from "mongoose";
interface IUser extends mongoose.Document {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default IUser;
