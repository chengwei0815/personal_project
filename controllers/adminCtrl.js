const siteData = require("../data/siteData");
const Course = require("../models/courseModel");
const Service = require("../models/serviceModel");

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/admin", {
        copyrightYear: siteData.year,
      });
    } else {
      console.log("There is an error.");
      response.redirect("/login");
    }
  },
  admin_courses: (request, response) => {
    Course.find({}, (error, allCourses) => {
      if (error) {
        return error;
      } else {
        // if (request.isAuthenticated()) {
          response.render("pages/adminCourses", {
            copyrightYear: siteData.year,
            courseArray: allCourses,
          });
        // } else {
        //   console.log("There is an error.");
        //   response.redirect("/login");
        // }
      }
    });
  },
  create_course: (request, response) => {
    response.render("pages/courseCreate", {
      copyrightYear: siteData.year,
    });
  },
  admin_services: (request, response) => {
    Service.find({}, (error, allServices) => {
      if (error) {
        return error;
      } else {
        // if (request.isAuthenticated()) {
          response.render("pages/adminServices", {
            copyrightYear: siteData.year,
            serviceArray: allServices,
          });
        // } else {
        //   console.log("There is an error.");
        //   response.redirect("/login");
        // }
      }
    });
  },
  create_service: (request, response) => {
    response.render("pages/serviceCreate", {
      copyrightYear: siteData.year,
    });
  },
  course_update_get: (request, response) => {
    const { _id } = request.params;
    Course.findOne({ _id: _id }, (error, foundCourse) => {
      if (error) {
        return error;
      } else {
        // if (request.isAuthenticated()) {
          response.render("pages/updateCourse", {
            copyrightYear: siteData.year,
            foundCourse: foundCourse,
          });
        // } else {
        //   console.log("There is an error.");
        //   response.redirect("/login");
        // }
      }
    });
  },
  service_update_get: (request, response) => {
    const { _id } = request.params;
    Service.findOne({ _id: _id }, (error, foundService) => {
      if (error) {
        return error;
      } else {
        // if (request.isAuthenticated()) {
          response.render("pages/updateService", {
            // copyrightYear: siteData.year,
            foundService: foundService,
          });
        // } else {
        //   console.log("There is an error.");
        //   response.redirect("/login");
        // }
      }
    });
  },
};
