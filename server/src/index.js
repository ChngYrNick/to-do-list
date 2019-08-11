import express from "express";
import bodyParser from "body-parser";

import auth from "./routes/auth";
import tasks from "./routes/tasks";
import users from "./routes/users";
import tokenParser from "./middleware/tokenParser";
import protectRoute from "./middleware/proctectRoute";
import database from "./database";
import { port } from "./utils/config";

const app = express();

app.use(bodyParser.json());

app.use(tokenParser);

app.use("/api", auth);

app.use("/api/", users);

app.use("/api", protectRoute, tasks);

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch(() => {
    console.error("Unable to connect to database");
    process.exit(1);
  });
