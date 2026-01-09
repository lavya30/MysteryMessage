import mongoose from "mongoose";
type connectionType = boolean;

let connected: connectionType = false;

async function connectToDatabase() {
  if (connected) {
    console.log("already connected to the database");
    return;
    
  }
  try {
    const db = mongoose.connect(process.env.MONGODB_URI || "");
    connected = true;
    console.log("connected to the database");
    

  }
  catch (error) { 
    console.log("error connecting to the database", error);
    process.exit(1);

  }
}
export default connectToDatabase;