import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { key } from "../utils/config";

const router = express.Router();

router.get("/user", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, key, (err, payload) => {
    if (payload) {
      User.findById(payload.userId).then(user => {
        if (user) {
          res.json(user);
        } else {
          res.status(400).json({ error: "User does not exist" });
        }
      });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  });
});

export default router;
