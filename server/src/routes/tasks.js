import express from "express";

import Task from "../models/task";

const router = express.Router();

router.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/task/:id", (req, res) => {
  Task.findById(req.body.taskId)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/task", (req, res) => {
  const { task } = req.body;

  if (!task.title) {
    res.status(400).json({ message: "Title is required" });
  } else {
    const { title, date } = task;

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
  Task.findByIdAndDelete(req.body.taskId, err => {
    if (err) {
      res.send(err);
    }
  });
});

router.put("/task/:id", (req, res) => {
  const { task } = req.body;

  if (!task.title) {
    res.status(400).json({ message: "Title is required" });
  } else {
    const { title, date, titleId } = task;

    Task.findByIdAndUpdate(
      titleId,
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

export default router;
