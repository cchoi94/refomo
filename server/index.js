const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://choicodes:${process.env.MONGO_ATLAS_PW}@cluster0-axnqa.mongodb.net/refomo?retryWrites=true&w=majority`, {
  useNewUrlParser: true
})

nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
      }
      next()
    })
    app.use('/api/refPosts', require('./routes/refPosts')) 
    app.use('/api/users', require('./routes/Users')) 
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})