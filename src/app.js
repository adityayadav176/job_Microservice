import express from 'express'
import cookieparser from 'cookie-parser'
import cors from 'cors'

const app = express();

app.use(express.json);
app.use(cookieparser());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: ["http://localhost:5500", "http://localhost:3000", "http://localhost:5174"],
    credentials: true,
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.get("/", (req, res) => {
    res.send("Job Microservice is Working")
})

export default app