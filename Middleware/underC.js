const underConstructions = (req, res, next) => {
    return res.render('underConstructions.ejs');
    next();
}

module.exports = underConstructions;