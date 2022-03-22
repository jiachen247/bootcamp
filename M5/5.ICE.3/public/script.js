// const { request } = require("express")

// Create a button using JavaScript
const createBugButton = document.createElement("button")
createBugButton.innerHTML = "Create a bug"
createBugButton.onclick = displayForm
document.body.appendChild(createBugButton)

const div = document.createElement("div")

// Function to display form when create a bug button is clicked
function displayForm() {

    const problemField = document.createElement("input")
    const errorTextField = document.createElement("input")
    const commit = document.createElement("input")
    problemField.type = "text"
    errorTextField.type = "text"
    commit.type = "text"

    problemField.setAttribute("id", "problem")
    errorTextField.setAttribute("id", "errorText")
    commit.setAttribute("id", "commit")

    const submitButton = document.createElement("button")
    submitButton.innerHTML = "Submit"
    submitButton.onclick = submitFormData
    submitButton.setAttribute("id", "submitButton")

    div.appendChild(problemField)
    div.appendChild(errorTextField)
    div.appendChild(commit)
    div.appendChild(submitButton)

    document.body.appendChild(div)
}

// function to submit form data
function submitFormData() {
    const requestBody = {}
    requestBody.problem = document.getElementById("problem").value
    requestBody.errorText = document.getElementById("errorText").value
    requestBody.commit = document.getElementById("commit").value

    axios
    .post('/post', requestBody)
    .then((response) => {
        console.log("Done adding bug to database!")
        // delete elements of the form. 
        // as an optimization can also consider only showing/hiding these elements
        const problem = document.getElementById("problem")
        const errorText = document.getElementById("errorText")
        const commit = document.getElementById("commit")
        const submitButton = document.getElementById("submitButton")

        div.removeChild(problem)
        div.removeChild(errorText)
        div.removeChild(commit)
        div.removeChild(submitButton)
    }
    )
    .catch((error) => {
        // handle error
        console.log(error)
    }
    )
}
  