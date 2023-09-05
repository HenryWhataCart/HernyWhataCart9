const server = require('./src/app.js');
const { conn } =require('./src/db.js')

  server.listen(3001, async () => {
    await conn.sync({force:false}) 
    console.log('%s listening at 3001')
  })
