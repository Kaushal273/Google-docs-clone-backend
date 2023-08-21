import mongoose from "mongoose";

const Connection = async (username= 'kaushalyadav536',password='kaushalgoogle') =>{
    const URL = `mongodb+srv://${username}:${password}@docs-clone.73l4ize.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;