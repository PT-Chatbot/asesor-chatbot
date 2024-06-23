import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//Conexiones y listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Servidor abierto & conectado a la base de datos 🤟")
    );
  })
  .catch((err) => console.log(err));
