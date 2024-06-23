import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo conectar a MongoDB 😭");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo desconectar de MongoDB 😓");
  }
}

export { connectToDatabase, disconnectFromDatabase };
