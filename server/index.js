require('dotenv').config()
const server = require('./src/app.js');
const { conn } =require('./src/db.js')
const {PORT} = process.env

  server.listen(PORT, async () => {
    await conn.sync({force:true}) 
    console.log(`%s listening at ${PORT}`)
  })
