const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.Mongodb_URL);
    console.log("Database Is Successfully Connected");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
