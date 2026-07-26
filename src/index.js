import  app  from "./app.js"
import dotenv from 'dotenv'
import { APP_NAME } from "./constant/constant.js";
import { connectToMongo } from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT;

connectToMongo().then(()=>{
        app.listen(PORT || 8000, () => {
        console.log(`${APP_NAME} Is Running On Port : ${PORT}`);
        console.log(`${APP_NAME} URL : http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(`MongoDb Connection Failed`);
})

