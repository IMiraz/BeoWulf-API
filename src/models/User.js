import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


const schema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    lowercase:true,
    index:true,
    unique:true
},
passwordHash:{
    type:String,
    required:true
},
confirmed:{
    type:Boolean,
    default:false
},
confirmationToken:{
    type:String,
    default:""
}


}, {timestamps:true});

schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password,this.passwordHash);

};

schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
  };

  schema.methods.seConfirmationToken = function seConfirmationToken() {
    this.ConfirmationToken =this.genarateJWT();
  };

  schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
    return `${process.env.HOST}/confirmation/${this.ConfirmationToken}`;
  };

schema.methods.genarateJWT = function genarateJWT() {
 return jwt.sign({
 email:this.email
 },process.env.JWT_SECRETKEY)
};
schema.methods.toAuthJSON = function toAuthJSON() {
     return{
    email: this.email,
    confirmed:this.confirmed,
    token:this.genarateJWT()
     }

};

schema.plugin(uniqueValidator, {message:"this email already taken"})



export default mongoose.model('User', schema);