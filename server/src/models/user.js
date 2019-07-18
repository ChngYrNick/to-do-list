import mongoose from "mongoose";
import { hash, compare } from "bcryptjs";

const { Schema } = mongoose;

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
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "users", versionKey: false }
);

userSchema.pre("save", function hashPassword(next) {
  if (this.isModified("password")) {
    hash(this.password, 10).then(hashedPassword => {
      this.password = hashedPassword;
      next();
    });
  }
});

// eslint-disable-next-line
userSchema.methods.matchesPassword = function(password, next) {
  compare(password, this.password, (err, isMatch) => {
    if (err) return next(err);
    next(null, isMatch);
  });
};

export default mongoose.model("User", userSchema);
