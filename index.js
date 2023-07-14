import app from "./app/app.js";
//importar la variable de entorno del puerto
import "dotenv/config";
//importar la conexion ala baase de datos

async function main(){
    try {
       //await connectDB();
        const PORT = process.env.PORT || 3000;

        app.listen(PORT );
        console.log(`http://localhost:${PORT} servidor corriendo 😍🔥😍🔥👌`);
    } catch (error) {
        console.log(error);
    }
}

main();