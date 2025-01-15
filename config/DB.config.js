import mongoose from "mongoose";


export const connectToMongoDB = () => {
    const uri =`mongodb+srv://israelFertig:mf189010@cluster0.ut4rs.mongodb.net/ShopingList` 
//   const connectionString = process.env.MONGO_CONNECTION;
  try {
    mongoose.connect(uri);
    console.log("Mongo is here");
  } catch (error) {
    console.log("Mongo is NOT here");
    console.log(error);
  }
};
