const mongoose = require('mongoose');

const texoxoSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// export default mongoose.model('messageContent', texoxoschema);
module.export = 'messageContent', texoxoSchema;