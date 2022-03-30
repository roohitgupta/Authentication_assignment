const mongoose = require("mongoose")

const bcrypt = require("bcrypt")
 

const userSchema = new mongoose.Schema({

    firstName:{type:String, required:true},
    profilepic:{type:String, required:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:[{type:String, required:true}],
    
},{
    timestamps:true,
    versionKey:false
})
// hashing the password

userSchema.pre("save",function (next){
   const hash=bcrypt.hashSync(this.password, 8);
   this.password=hash
   return next()
})
userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("user", userSchema)

module.exports = User;