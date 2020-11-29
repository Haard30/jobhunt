
module.exports = {

    searchPage: async function (req, res) {
      if(req.session.authenticated != true ){
          res.redirect('/?error=You need to login first!');
      }
      else{
          let name = req.session.name;

          if(req.session.rtype === "employer"){
              let applicants = []

              applicants = [
                  {
                      "name":"John",
                      "skills":"Java, HTML, CSS",
                      "work_experience":"3 years",
                  },
                  {
                    "name":"Dev",
                    "skills":"Docker, Python, Project Management",
                    "work_experience":"1.5 years",
                },
                {
                    "name":"Robin",
                    "skills":"MySql, ML, AI",
                    "work_experience":"0.5 years",
                },
                {
                    "name":"Bryn",
                    "skills":"Node.js, MongoDB, Node.js",
                    "work_experience":"2 years",
                },
              ]

              if(applicants.length < 1){
                  applicants = null
              }

              res.view('pages/employerSearch', { applicants });
          }

      }

  },
  postJob: async function (req, res) {
    if(req.session.authenticated != true ){
        res.redirect('/?error=You need to login first!');
    }
    else{
        let success = "Successfully added";
        res.view("pages/employerHome", { success })
    }
},
offerPage: async function (req, res) {
    if(req.session.authenticated != true ){
        res.redirect('/?error=You need to login first!');
    }
    else{
        let name = req.session.name;

        if(req.session.rtype === "employer"){
            let offers = []

            offers = [
                {
                    "name":"John",
                    "jobref":"j145 - SE 1",
                    "status":"employer interested",
                },
                {
                    "name":"Dev",
                    "jobref":"j146 - Devops Engineer",
                    "status":"applied",
                },
                {
                    "name":"Robin",
                    "jobref":"j232 - ML Engineer",
                    "status":"interview",
                },
                {
                    "name":"George",
                    "jobref":"j133 - System Analyst",
                    "status":"applied",
                },
            ]
            res.view('pages/employerOffer', { offers });
        }
    }
},
}
