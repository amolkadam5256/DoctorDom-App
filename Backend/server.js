import express from 'express';
import cors from 'cors';
import "dotenv/config"


//  app Config 

const app = express()
const port = process.env.PORT || 4000

// middleeewares

app.use(express.json())
app.use(cors())


// api End point 

app.get('/', (req, res) => {
    res.send('API WORKING GREET API IS WORKING ')
}
)

app.listen(port, () => console.log("Server started", port))