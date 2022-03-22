import db from './models/index.mjs';

// import your controllers here

export default function bindRoutes(app) {

  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  app.get('/', (request, response) => {
    response.render('home')
  })
  app.post('/post', (request, response) => {
    db.Bug.create({
      problem: request.body.problem,
      errorText: request.body.errorText,
      commit: request.body.commit
    }).then((result) => response.send("Added bug to database!"))
  })
}
