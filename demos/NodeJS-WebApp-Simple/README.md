# NodeJS Webapp

This is a simple NodeJS webapp that uses ExpressJS to serve a simple HTML page. This will add a user to your repository. 

## Running the app

To run the app, simply run the following command:

```bash
node app.js
```

This will start the app on port 3000. You can access the app by navigating to `http://localhost:3000` in your browser.


# Steps for Copilot Chat Demo

## Step 1: Start the application

```bash
# Ask copilot chat "How can I start the application?"
# use the terminal commands it gives to run the code
# Test the app in the browser
```

## Step 2: Add Comments to the App.js file

```bash
# Add comments to the app.js file explaining what each section of the code does
```

## Step 3: Explain the Code

```bash
# Highlight the code in the app.js file that you need explained
# Use the inline copilot chat feature to explain the code you like to understand
# Highlight another section of the code and ask for an explanation in chat UI
```

## Step 4: Add more functionality: Permission Input

```bash
# Copilot Chat: "How can I have the user input a permission field?" 
```
<details>
<summary>Copilot Suggestion</summary>

### Add a permission field to the form

```html
<form action="/add-collaborator" method="POST">
    <label for="owner">Owner:</label><br>
    <input type="text" id="owner" name="owner"><br>
    <label for="repo">Repo:</label><br>
    <input type="text" id="repo" name="repo"><br>
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="permission">Permission:</label><br>
    <select id="permission" name="permission">
        <option value="pull">Pull</option>
        <option value="push">Push</option>
        <option value="admin">Admin</option>
        <option value="maintain">Maintain</option>
    </select>
    <input type="submit" value="Add Collaborator">
</form>
```

### Update app.js to handle the new permission field

```javascript

app.post('/add-collaborator', async (req, res) => {
  const { owner, repo, username, permission } = req.body;
  await addCollaborator(owner, repo, username, permission);
  res.redirect('/');
});


async function addCollaborator(owner, repo, username, permission) {
    // ...
    const response = await octokit.rest.repos.addCollaborator({
        owner,
        repo,
        username,
        permission
    });
    // ...
}

```

</details>

## Step 5: Add UI commponents to this application 

```bash 
# Copilot Chat: "how can I make this express and nodejs application look more modern?"
```

<details>
<summary>Copilot Suggestion</summary>

### Add Bootstrap to the HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Add Collaborator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body class="bg-light">
    <div class="container">
        <div class="py-5 text-center">
            <h2>Add Collaborator</h2>
        </div>

        <div class="row">
            <div class="col-md-12">
                <form class="needs-validation" action="/add-collaborator" method="POST">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="owner">Owner</label>
                            <input type="text" class="form-control" id="owner" name="owner" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="repo">Repo</label>
                            <input type="text" class="form-control" id="repo" name="repo" required>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>

                    <div class="mb-3">
                        <label for="permission">Permission</label>
                        <select class="custom-select d-block w-100" id="permission" name="permission" required>
                            <option value="pull">Read</option>
                            <option value="push">Write</option>
                            <option value="push">Triage</option>
                            <option value="admin">Admin</option>
                            <option value="maintain">Maintain</option>
                        </select>
                    </div>

                    <button class="btn btn-primary btn-lg btn-block" type="submit">Add Collaborator</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
```
</details>


## Step 6: Error Handling

Go to the UI and test a non existing user. 

```bash
# how can I add more error handling to this app? Specifically, I'd like to throw an error in the UI when a user does not exist
```

<details>
<summary>Copilot Suggestion</summary>

### Add Error Handling to the App

```javascript
// ## Add error handling to the app.js file
async function addCollaborator(owner, repo, username, permission) {
    try {
        // Call the GitHub API to add a collaborator
        const response = await octokit.rest.repos.addCollaborator({
            owner,
            repo,
            username,
            permission
        });

        // Return the response
        return response;
    } catch (error) {
        // If there was an error calling the GitHub API, throw the error
        throw error;
    }
}
// Add error handling to the app.js file in the add-collaborator route
app.post('/add-collaborator', async (req, res) => {
    try {
        const { owner, repo, username, permission } = req.body;
        const response = await addCollaborator(owner, repo, username, permission);

        // If the response status is 201, the collaborator was added successfully
        if (response.status === 201) {
            res.send('Collaborator added successfully');
        } 
        // If the response status is 204, the user is already a collaborator
        else if (response.status === 204) {
            res.send('User is a collaborator');
        } 
        // If the response status is anything else, there was an error
        else {
            res.send('There was an error adding the collaborator');
        }
    } catch (error) {
        // If the user does not exist, send an error message to the client
        if (error.status === 404) {
            res.send('User does not exist');
        } else {
            res.send('There was an error adding the collaborator');
        }
    }
});
```

</details>
