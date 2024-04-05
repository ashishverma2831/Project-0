const {Schema,model} = require('mongoose');

const multerSchema = new Schema({
    image:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = model('multer',multerSchema)