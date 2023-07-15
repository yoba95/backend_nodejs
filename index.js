import app from "./app/app.js";
import "dotenv/config";
import {connectDB} from "./app/databases/conect_db.js";

async function main(){
    try {
       //await connectDB();
        const PORT = process.env.PORT || 3000;

        connectDB();
        app.listen(PORT );
        console.log(`http://localhost:${PORT} servidor corriendo 😍🔥😍🔥👌`);
    } catch (error) {
        console.log(error);
    }
}

main();