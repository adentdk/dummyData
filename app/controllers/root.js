exports.index = (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : {
            "text": "Welcome to dummydata API" 
        }
    });
}