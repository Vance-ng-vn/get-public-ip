const logger = require('./modules/logger')
const express = require('express')
const app = express()
const axios = require('axios')

const api_server = 'https://api.ipify.org'

logger.empty();
setInterval(() => {
    axios.get(api_server).then(result => {
        logger.log(result.data);
    })
}, 1000)

app.get('/', (req, res) => {
    res.end(logger.read());
})

app.listen(process.env.PORT || 4567);