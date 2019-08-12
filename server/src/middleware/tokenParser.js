import jwt from "jsonwebtoken";

import User from "../models/user";
import { key } from "../utils/config";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, key, (err, payload) => {
      if (payload) {
        User.findById(payload.userId).then(doc => {
          req.user = doc;
          next();
        });
      } else {
        console.log(err);
        next();
      }
    });
  } catch (e) {
    next();
  }
};
