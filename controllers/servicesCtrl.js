// const siteData = require('../data/siteData');
const siteData = require('../data/siteData');
const Service = require('../models/serviceModel');

module.exports = {
    all_services: (request, response) => {
        Service.find({}, (error, allServices) => {
            if (error) {
                return error;
            } else {
                response.render('pages/services', {
                    copyrightYear: siteData.year,
                    serviceArray: allServices
                });
            }
        });
    },
    service_detail: (request, response) => {
        const { _id } = request.params;
        Service.findOne({ _id: _id }, (error, foundService) => {
            if (error) {
                return error;
            } else {
                response.render("pages/serviceDetail", {
                  name: siteData.userName,
                  copyrightYear: siteData.year,
                  serviceItem: foundService,
                });
            }
        })
    },
    service_create_post: (request, response) => {
        const { serviceName, content } = request.body;
        const newService = new Service({
            serviceName: serviceName,
            content: content
        });
        newService.save();
        response.redirect('/admin/admin-services');
    },
    service_update_put: (request, response) => {
        const { _id } = request.params;
        const { serviceName, content } = request.body;
        Service.findByIdAndUpdate(_id, {
            $set: {
                serviceName: serviceName,
                content:content
            },
        }, { new: true },
      (error) => {
        if (error) {
          return error;
        } else {
          response.redirect("/admin/admin-authors");
        }
      }
    );
  },
    service_delete: (request, response) => {
        const { _id } = request.params;
        Service.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/admin-services')
            }
        });
    }
}
