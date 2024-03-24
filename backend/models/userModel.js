const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already exists'],
        trim:true
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        trim:true,
        minlength:[6,'Password must be at least 6 characters long'],
        maxlength:[12,'Password must be at most 12 characters long'],
        match:[/^[a-zA-Z0-9]{6,12}$/,'Password must contain only letters and numbers'],
    },
},
{
    timestamps:true
});

module.exports = model('User', userSchema);


// Numbers have min and max validators.
// Strings have enum, match, minLength, and maxLength validators.



// Array syntax: min: [6, 'Must be at least 6, got {VALUE}']
// Object syntax: enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }



// const breakfastSchema = new Schema({
//     eggs: {
//       type: Number,
//       min: [6, 'Must be at least 6, got {VALUE}'],
//       max: 12
//     },
//     drink: {
//       type: String,
//       enum: {
//         values: ['Coffee', 'Tea'],
//         message: '{VALUE} is not supported'
//       }
//     }
//   });
//   const Breakfast = db.model('Breakfast', breakfastSchema);
  
//   const badBreakfast = new Breakfast({
//     eggs: 2,
//     drink: 'Milk'
//   });
//   const error = badBreakfast.validateSync();
//   assert.equal(error.errors['eggs'].message,
//     'Must be at least 6, got 2');
//   assert.equal(error.errors['drink'].message, 'Milk is not supported');








// const breakfastSchema = new Schema({
//     eggs: {
//       type: Number,
//       min: [6, 'Too few eggs'],
//       max: 12
//     },
//     bacon: {
//       type: Number,
//       required: [true, 'Why no bacon?']
//     },
//     drink: {
//       type: String,
//       enum: ['Coffee', 'Tea'],
//       required: function() {
//         return this.bacon > 3;
//       }
//     }
//   });
//   const Breakfast = db.model('Breakfast', breakfastSchema);
  
//   const badBreakfast = new Breakfast({
//     eggs: 2,
//     bacon: 0,
//     drink: 'Milk'
//   });
//   let error = badBreakfast.validateSync();
//   assert.equal(error.errors['eggs'].message,
//     'Too few eggs');
//   assert.ok(!error.errors['bacon']);
//   assert.equal(error.errors['drink'].message,
//     '`Milk` is not a valid enum value for path `drink`.');
  
//   badBreakfast.bacon = 5;
//   badBreakfast.drink = null;
  
//   error = badBreakfast.validateSync();
//   assert.equal(error.errors['drink'].message, 'Path `drink` is required.');
  
//   badBreakfast.bacon = null;
//   error = badBreakfast.validateSync();
//   assert.equal(error.errors['bacon'].message, 'Why no bacon?');