import mongoose from "mongoose"


const connections = {};


export const db_connection = async () => {
  try {
    
    connections.DB_PORT = await mongoose.connect(process.env.DB_PORT);
    
    console.log('Database connected successful');
  } catch (error) {
    console.error('Error to connect database', error);
    process.exit(1);
  }
};



process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection has been closed by server administrator');
  process.exit(0);
});




export default db_connection