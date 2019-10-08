const conversations = require("./../db/chat/chatlist.json");

exports.index = (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : {
            "text": "Welcome to dummydata Chat API" 
        }
    });
}

exports.conversations = (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : conversations
    });
} 