import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { key } from "../utils/config";

const router = express.Router();

router.post("/auth/signin", (req, res) => {
  User.findOne({ login: req.body.login })
    .then(user => {
      user.matchesPassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const { _id, login } = user;
          const token = jwt.sign({ userId: _id }, key);
          console.log(token);
          res.status(200).json({
            userId: _id,
            token,
            login
          });
        } else {
          res.status(400).json({ message: "Invalid Password/Username" });
        }
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Invalid Password/Username" });
    });
});

router.post("/auth/signup", (req, res) => {
  User.findOne({ login: req.body.login }).then(user => {
    if (user) {
      res.status(400).json({ message: "This login already in use" });
    } else {
      const { login, password } = req.body;

      const newUser = new User({ login, password });

      newUser.save();

      return res.status(200).json({ message: "User created!" });
    }
  });
});

export default router;
