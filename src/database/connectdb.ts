import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.URI_MONGO || "");
    console.log('Connect to DB ok');
  } catch (err) {
    console.error('Error of connection to MongoDB:' + err);
  }
}

connectToDB();