import { Socket } from "socket.io";

export const socketControllers = {
  codeUpdateController: (socket: Socket) => {
    socket.on("updateCode", async (newCode: string) => {
      const { id } = socket.handshake.query;
      try {
        if (id) {
          socket.broadcast.to(id).emit("requestCode", newCode);
        }
      } catch (error) {
        socket.emit("updateError", { message: "Failed to update document." });
      }
    });
  },
  disconnectController: (socket: Socket) => {
    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  },
};
