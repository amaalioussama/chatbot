import mongoose from 'mongoose';

async function connect() {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB');
    return;
  }
  else{
    console.log('you are not connected ');
  }
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}
export default connect;