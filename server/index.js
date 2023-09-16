const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require('dotenv').config()
const {PORT} = process.env

  server.listen(PORT, async () => { 
    await conn.sync({force:true}) 
    console.log('%s listening at 3001')
  })
