import express from "express";

import Task from "../models/task";

const router = express.Router();

// ???
router.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      const data = [];
      Object.keys(tasks).forEach(key => {
        const { title, _id, date } = tasks[key];
        data.push({ title, _id, date });
      });

      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/task/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/task", (req, res) => {
  const { title, date } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
  } else {
    Task.create(
      {
        title,
        date
      },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    );
  }
});

router.delete("/task/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.put("/task/:id", (req, res) => {
  const { title, date } = req.body;
  if (!title) {
    res.status(400).json({ message: "Title is required" });
  } else {
    Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        date
      },
      { new: true },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    );
  }
});

export default router;
