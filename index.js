const express = require('express')
var cors = require('cors')
var jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors({
    origin:[
        "http://localhost:5173",
    ]
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/jwt',(req,res)=>{
    const user= req.body;
    const token=jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.send(token)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})