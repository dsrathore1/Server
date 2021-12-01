const middleWare = (req, res, next) => {
    console.log("Hello I'm middleware");
    next();
}

module.exports = middleWare;