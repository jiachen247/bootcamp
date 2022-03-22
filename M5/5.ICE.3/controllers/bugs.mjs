export default function initItemsController(db) {
  const index = async (_, response) => {
    response.render('home');
  };

  const create = async (request, response) => {
    try {
      const bug = {
        problem: request.body.problem,
        errorText: request.body.errorText,
        commit: request.body.commit,
      };
      await db.Bug.create(bug);
      response.send('Added bug to database!');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, create,
  };
}
