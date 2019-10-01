const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema  = new Schema(
	{ 
		"type": String,
		"email": String,
		"pwd": String,
	}
);

const VoteSchema = new Schema(
	{ 
		"registrant": String,
		"voter": [String],
		"topic": String,
		"category": [{
			"option": String,
			"count": Number,
			}],
		"timestamp": Number,
		"duration": Number,
		"status": String
	}
);

const User = mongoose.model('User', UserSchema);
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = User;
module.exports = Vote;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/voteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useMongoClient: true
})
.then( () => console.log("connected to mongodb"))
.catch( e => console.error(e))
;
