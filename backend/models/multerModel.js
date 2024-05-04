const {Schema,model} = require('mongoose');

const multerSchema = new Schema({
    image_url:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = model('multer',multerSchema)