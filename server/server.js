import config from './../config/config';
import mongoose from 'mongoose';



import app from './express';

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})


app.listen(config.port,(err)=>{
  if(err){
    console.log(err)
  }
  console.info('server started on the port %s',config.port)
})
