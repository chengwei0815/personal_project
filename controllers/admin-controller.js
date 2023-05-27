const data = require('../data/data');

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin', {
            courseArray: data
        });
    },
    create: (req, res) => {
        res.render('pages/create');
    },
    update: (req, res) => {
        const { _id } = req.params;
        const foundBook
    }
}
