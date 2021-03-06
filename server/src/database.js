import mongoose from "mongoose";
import { mongoURL } from "./utils/config";

export default () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set("debug", true);

    mongoose.connection
      .on("error", error => reject(error))
      .on("close", () => console.log("Database connection closed."))
      .once("open", () => resolve(mongoose.connections[0]));

    mongoose.connect(mongoURL, { useNewUrlParser: true });
  });
};
