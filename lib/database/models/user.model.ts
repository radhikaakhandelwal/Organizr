import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true }, //this will help us make connecting between the clerk user and the database user
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);
export default User;
