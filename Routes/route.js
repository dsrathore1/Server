const router = require('express').Router();
// MiddleWares

const middleware = require('../Middleware/firstMiddleWare');
const underConstructions = require('../Middleware/underC');

router.get('/', (req, res) => {
    res.render('index.ejs', {
        name: 'Home Page',
        num: 32,
        marks: [42, 65, 64, 25]
    });
});

router.get('/about', underConstructions, (req, res) => {
    res.render('about.ejs');
});

router.get('/json', middleware, (req, res) => {
    res.render('json.ejs')
})

module.exports = router;