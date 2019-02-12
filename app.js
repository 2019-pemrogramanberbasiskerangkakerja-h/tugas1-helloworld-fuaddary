const express = require('express')
const app = express()
const port = 7777

app.get('/', function(request,response) {
	response.send('Hello World');
})

app.listen(port, () => console.log (`listening on port ${port}!`))
