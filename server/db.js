const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useMongoClient: true
})
.then( () => console.log("connected to mongodb"))
.catch( e => console.error(e))
;
