import express from 'express';
import mongoose from 'mongoose';

import { devConfig } from './config/env/development';
import { restRouter } from './api';
import { setGlobalMiddleware } from './api/middlewares/global-middleware';

mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://localhost/${devConfig.database}`)

// newdb is the new database we create
var url = "mongodb://localhost/${devConfig.database}";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    // print database name
    console.log("Switched to "+devConfig.database+" database");
    // after completing all the operations with db, close it.
    var dbase = db.db("mydb"); 

    dbase.createCollection("newCollection", function(err, result) {
      if (err) throw err;
      console.log("Collection is created!");
      // close the connection to db when you are done with it
      db.close();
  });
  
});

const app = express();
const PORT = devConfig.port;

setGlobalMiddleware(app);
app.use('/api', restRouter);

// If url wrong to show this error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () =>{
    console.log(`Server is running at PORT ${PORT}`)
})