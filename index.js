import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Auth from './src/routes/Auth.js'
import User from './src/routes/User.js'
import Post from './src/routes/Post.js'



const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

 // route
 app.use('/auth', Auth)
 app.use('/user', User)
 app.use('/post', Post)

app.use((err, req, res, next) => {
  console.log({err});
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("Connected to backend.");
});



 