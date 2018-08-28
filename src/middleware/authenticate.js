import jwt from 'jsonwebtoken'

export default(req, res, next) => {
const header =req.headers.authorization;

let token;
//bearerr
if(header) token = header.split(" ")[1];

if(token) {
jwt.verify(token,process.env.JWT_SECRETKEY, (err, decoded)=> {
 if(err) {
     res.status(401).json({errors:{global:"invalid Token"}})
 }
 else {
     req.userEmail= decoded.email;
next();
 }
})
}
else {
    res.status(401).json({errors:{global:"no token"}});
}


}