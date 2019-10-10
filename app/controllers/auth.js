const users = require("./../db/user/users.json");
const bcrypt = require("bcrypt");
const jwt =  require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const secret_key = JWT_SECRET || "jwtsecretkey";

exports.index = (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : {
            "text": "Welcome to dummydata Auth API" 
        }
    });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
	    const user = users.filter((item) => {
	    	if (email === item.email) {
	    		return item;
	    	}
	    });

	    if (user.length !== 1) {
	    	throw new Error("EMAIL NOT FOUND");
	    }

	    const isPasswordMatch = await bcrypt.compare(password, user[0].password);

	    if (isPasswordMatch) {
	    	const token = jwt.sign({
	    		name: user.name,
	    		emial: user.email
	    	}, secret_key);
		    return res.status(200).json({
		        "status": 200,
		        "message": "OK",
		        "data" : {
		        	"token": token
		        }
		    });
	    } else {
	    	throw new Error("PASSWORD DID'N MATCH")
	    }


    } catch (e) {
    	console.log(e);
    	return res.status(400).json({
	        "status": 400,
	        "message": "OK",
	        "error" : e.message
	    });
    }
} 