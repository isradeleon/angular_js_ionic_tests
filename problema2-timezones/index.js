const path = require('path')
const moment = require('moment')
const express = require('express')
const app = express()

/* Port */
const port = 5000

/* Static files */
app.use(express.static(path.join(__dirname,'public')));

/* Routes */
app.get('/date', (req,res) => {
    var jsonObj

    const time = req.query.time
    const timezone = req.query.tz
    const format = 'HH:mm:ss'
    const regex = /^$|^(([01][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/
    
    if(!time.match(regex) || isNaN(timezone)){
        jsonObj = {
            "response": 'Formato inválido.'
        }
    }else{
        const m = moment(req.query.time, format)
        jsonObj = {
            "response": {
                "time": m.add(timezone, 'hours').format(format),
                "timezone": 'utc' + (timezone > 0 ? '+' : '') + timezone
            }
        }
    }

    res.json(jsonObj)
})

/* Server */
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
    console.log(`Open http://localhost:${port} in your browser`);
})

