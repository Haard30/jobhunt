
module.exports = {

    fileOpen: async function (req, res) {
      res.sendFile("resume.pdf")
    },

    searchPage: async function (req, res) {
      if(req.session.authenticated != true ){
          res.redirect('/?error=You need to login first!');
      }
      else{
          let name = req.session.name;

          if(req.session.rtype === "applicant"){

              res.view('pages/applicantSearch', { name});
          }

      }

  },
  resourcePage: async function (req, res) {
    if(req.session.authenticated != true ){
        res.redirect('/?error=You need to login first!');
    }
    else{
        let name = req.session.name;

        if(req.session.rtype === "applicant"){

            res.view('pages/applicantResources', { name});
        }

    }

},
processPage: async function (req, res) {
  if(req.session.authenticated != true ){
      res.redirect('/?error=You need to login first!');
  }
  else{
      let name = req.session.name;
      console.log("~~~~~~~~~~~")
      if(req.session.rtype === "applicant"){

          res.view('pages/applicantProcess', { name});
      }

  }

},
}