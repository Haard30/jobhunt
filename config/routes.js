/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  "GET /": "AuthenticationController.backHome",

  '/registerUser': {view: 'pages/registerUser'},
  "POST /registerUser": "AuthenticationController.registerData",


  "POST /twofactor": "AuthenticationController.twofactorQuestion",
  "GET /twofactor": "AuthenticationController.twofactorQuestion",
  "POST /authenticateAnswer": "AuthenticationController.authenticateAnswer",

  "GET /userHome": "AuthenticationController.goHome",

  "GET /openFile": "ApplicantController.fileOpen",

  "GET /applicantSearch": "ApplicantController.searchPage",
  "GET /applicantResources": "ApplicantController.resourcePage",
  "GET /applicantProcess": "ApplicantController.processPage",
  
  "POST /submitJob": "EmployerController.postJob",
  "GET /employerSearch": "EmployerController.searchPage",
  "POST /searchApplicants": "EmployerController.searchPage",

  "GET /employerOffer": "EmployerController.offerPage",



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
