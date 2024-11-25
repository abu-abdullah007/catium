import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/userRoute';
import postRoutes from './routes/postRoute';
import profileRouter from './routes/profileRoute';

const app: Express = express();
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))


app.use('/user', userRouter)   // all user releted routes in here
app.use('/posts', postRoutes) // all post create/ read/ delete routes in here
app.use('/profile', profileRouter) // all user profile routes in here


app.use('*', (request: Request, response: Response) => {
    response.status(404).json({
        message: "Route not found",
        status: 404,
        success: false
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})