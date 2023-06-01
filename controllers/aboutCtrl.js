const siteData = require("../data/siteData");

module.exports = {
  about: (request, response) => {
    response.render("pages/about", {
      copyrightYear: siteData.year,
    });
  },
};
