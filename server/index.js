// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({
    path: './environment/local.env'
})
app.use(cors())

const { HOST, PORT } = process.env

const operationRoutes = require('./src/routes/operation')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(operationRoutes);

app.listen(PORT, HOST, () => {
	console.log(`Server at ${HOST}:${PORT}`);
})
