import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

import auth from "./routes/auth";
import tasks from "./routes/tasks";
import users from "./routes/users";
import tokenParser from "./middleware/tokenParser";
import protectRoute from "./middleware/proctectRoute";
import database from "./database";
import { port, originURL } from "./utils/config";

const app = express();

app.use(
  cors({
    origin: originURL,
    credentials: true
  })
);

app.use(bodyParser.json());

app.use(tokenParser);

app.use("/api", auth);

app.use("/api/", users);

app.use("/api", protectRoute, tasks);

app.use(express.static(path.resolve(__dirname, "../", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
});

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch(() => {
    console.error("Unable to connect to database");
    process.exit(1);
  });
