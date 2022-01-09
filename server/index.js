const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')




require('dotenv').config()



const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.pxtpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log('DB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send(
    'Welcome to GodSeeker Server, this only server, Click: https://stupefied-neumann-58622d.netlify.app    to visit app '
    ))

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server run on port ${PORT}`))