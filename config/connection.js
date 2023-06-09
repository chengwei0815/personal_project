const mongoose = require('mongoose');
// const dotenv = require('dotenv');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) {
            console.log('Successful connection with MongoDB Server');
        }
        else {
            console.log("Error with MongoDB's connectivity");
            // console.log(err);
        }
    });

    // mongoose.connect: the connection string needs to insert db name in between the '.net/' and '?' in line 4 here
