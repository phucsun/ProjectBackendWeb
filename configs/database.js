const mongoose = require("mongoose");
module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connect Successful");
    } catch (error ) {
        console.log("Connect Failed");
    }
}