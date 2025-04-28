const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vallabh2002:vallabh2002@vdprojects.gmgyj.mongodb.net/Hospital-Ssystem?retryWrites=true&w=majority&appName=vdprojects"
    );
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
  }
};

module.exports = connectDb;
