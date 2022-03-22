// const { request } = require("express")

// Create a button using JavaScript
const createBugButton = document.createElement('button');
createBugButton.innerHTML = 'Create a bug';
createBugButton.onclick = displayForm;
document.body.appendChild(createBugButton);

// Function to display form when create a bug button is clicked
function displayForm() {
  document.getElementById("problem").hidden = false;
  document.getElementById("errorText").hidden = false;
  document.getElementById("commit").hidden = false;
  document.getElementById("submit").hidden = false;
  document.getElementById("submit").onclick = submitFormData;
}

// function to submit form data
function submitFormData() {
  const requestBody = {};
  requestBody.problem = document.getElementById('problem').value;
  requestBody.errorText = document.getElementById('errorText').value;
  requestBody.commit = document.getElementById('commit').value;

  axios
    .post('/create', requestBody)
    .then((response) => {
      console.log('Done adding bug to database!');
      
      document.getElementById("problem").hidden = true;
      document.getElementById("errorText").hidden = true;
      document.getElementById("commit").hidden = true;
      document.getElementById("submit").hidden = true;

      document.getElementById("successMsg").innerHTML = `Successfully added bug with problem: ${requestBody.problem}, errorText: ${requestBody.errorText} and commit ${requestBody.commit}`
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
