const mongoose = require('mongoose');

const mongodbUrl = 'mongodb+srv://abhishekh:ashish12@cluster0.anftmcr.mongodb.net/harvistify?retryWrites=true&w=majority';

const dbConnect = async () => {
    try {
        await mongoose.connect(mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Db connection successfully established");
    } catch (err) {
        console.log(`Error ${err.message}`);
    }
}

module.exports = dbConnect;
