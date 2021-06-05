var jwt=require('jsonwebtoken');
const JWT_SIGN_SECRET='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjI4ODI2NDAsImV4cCI6MTYyMjg4NjI0MH0.r7fAg0mVHrkLNKbKgv4C5MIbQfTl3FGdCOAJWCuCZWc';
module.exports={
    generateTokenForUser:function(userData){
        return jwt.sign({
            userId:userData.id,
            isAdmin:userData.isAdmin
        },
        JWT_SIGN_SECRET,{
            expiresIn:'1h'
        }
        )
    },
    parseAuthorization:function(authorization){
return (authorization != null) ? authorization.replace('Bearer ',''):null;
    },
    getUserId:function(authorization){
        var userId=-1;
        var token=module.exports.parseAuthorization(authorization);
        if(token!=null){
            try{
                var jwtToken=jwt.verify(token,JWT_SIGN_SECRET);
                if(jwtToken!=null)
                    userId=jwtToken.userId;
                }
                catch(err){}
            }
            return userId;
        }
    }
