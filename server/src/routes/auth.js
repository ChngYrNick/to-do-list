import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import key from "../utils/config";

const router = express.Router();

router.post("/auth/signin", (req, res) => {
  User.findById(req.body.userId)
    .then(user => {
      user.matchesPassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const { userId, login } = user;
          const token = jwt.sign({ userId }, key);

          res.status(200).json({
            userId,
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

      User.create(
        {
          login,
          password
        },
        err => {
          if (err) {
            res.send(err);
          } else {
            res.redirect("/auth/signin");
          }
        }
      );
    }
  });
});

export default router;
