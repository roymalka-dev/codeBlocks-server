import express from "express";
import { appConfig } from "./configs/appConfig";
import { Request, Response } from "express";
import { socketConfig } from "./configs/socketConfig";
import { socketControllers } from "./controllers/socketControllers";
import { DBconnection } from "./db/db";
import http from "http";
import "module-alias/register";
import { routes } from "./routes/routes";
import { router } from "./routes/router";

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();
const server = http.createServer(app);

appConfig(app);

//root route
app.get("/", (req: Request, res: Response) => {
  res.send("CodeBlocks server API");
});

//set up routes
router("api", app, routes);

//set up socket io
const { io } = socketConfig(server);

//socket io connection
io.on("connection", (socket) => {
  console.log("Client connected", socket.id);
  const id = socket.handshake.query.id;
  if (id) {
    socket.join(id);
  }

  socketControllers.codeUpdateController(socket);
  socketControllers.disconnectController(socket);
});

//connect to the database and start the server
DBconnection()
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error(`Error: ${err}`);
  });
