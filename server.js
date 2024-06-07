import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import serviceRouter from "./routes/serviceRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/service", serviceRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Working")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://jaijoshi:820GQPOYG@cluster0.wjlep0g.mongodb.net/?