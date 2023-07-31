const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// sincroniza todos los modelos junto con el servidor al iniciar.
conn.sync({ force: true }).then(async () => {
  server.listen(3001, () => {
    console.log('Server listening at 3001'); 
  });
});
