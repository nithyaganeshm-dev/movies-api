import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nithyaganeshm:w6FGVCpjDupIlNm8@cluster0.i6f1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Successfully Connected...!");
  } catch (error) {
    console.error(error.message);
    process.exit(1)
  }
};

export default connectDB
