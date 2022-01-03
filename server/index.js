const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
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
app.get('/', (req, res) => res.send('hello worlds'))

app.use('/api/auth', authRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`server run on port ${PORT}`))