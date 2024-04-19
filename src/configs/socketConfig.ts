import { Server } from "socket.io";

export const socketConfig = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  console.log("Socket is running");
  return { io };
};
