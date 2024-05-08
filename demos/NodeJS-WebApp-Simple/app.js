const express = require('express');
const { Octokit } = require("@octokit/rest");
const app = express();


require('dotenv').config();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function addCollaborator(owner, repo, username) {
        try {
                const response = await octokit.rest.repos.addCollaborator({
                    owner,
                    repo,
                    username,
                    permissions: 'write' // 'pull', 'push', 'admin', or 'maintain'
                });

                if (response.status === 201 || response.status === 204 ) {
                    console.log(`User ${username} added as a collaborator to the repository ${owner}/${repo}`);
                } else {
                    console.log(`There has been an error adding the collaborator: ${response.status}`);
                }
        } catch (error) {
                console.error(`Error adding collaborator: ${error}`);
        }
}

app.get('/', (req, res) => {
        res.render('index');
});

app.post('/add-collaborator', async (req, res) => {
    const { owner, repo, username } = req.body;

    await addCollaborator(owner, repo, username);

    res.send('Collaborator added successfully');
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));