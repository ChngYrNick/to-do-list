import mongoose from "mongoose";
import { hash, compare } from "bcryptjs";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { collection: "users", versionKey: false }
);

ObjectId.prototype.valueOf = () => {
  return this.toString();
};

userSchema.virtual("userId").get(() => {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true
});

userSchema.pre("save", next => {
  if (this.isModified("password")) {
    hash(this.password, 10).then(hashedPassword => {
      this.password = hashedPassword;
      next();
    });
  }
});

userSchema.methods.matchesPassword = (password, next) => {
  compare(password, this.password, (err, isMatch) => {
    if (err) return next(err);
    next(null, isMatch);
  });
};

export default mongoose.model("User", userSchema);
