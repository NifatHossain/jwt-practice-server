const express = require('express')
const app= express()
var cors = require('cors')
const port= process.env.port || 5000;

app.use(express.json())
app.use(cors(
    {
        origin:[
            
        ]
    }
))


app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})