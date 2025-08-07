import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"
import adminRoutes from "./routes/admin.routes.js";
import volunteerRoutes from "./routes/volunteer.routes.js";

const app = express();
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)
app.use(express.json({limit
    : "16kb"
}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))

app.use(cookieParser())

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/volunteers", volunteerRoutes);


export {app}