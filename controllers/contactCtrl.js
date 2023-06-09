const siteData = require('../data/siteData');

module.exports = {
    contact: (request, response) => {
        response.render('pages/contact', {
            copyrightYear: siteData.year,
        });
    },
    
}
