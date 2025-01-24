import mongoose from 'mongoose';

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log("Connexion à MongoDB réussie"))
    .catch((err) => console.error("Erreur de connexion à MongoDB", err));
  
};