import { app } from "./app.js"
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT || 8000, () => {
    console.log(`Server Is Running On Port : ${PORT}`);
    console.log(`Server URL : http://localhost:${PORT  }`);
})