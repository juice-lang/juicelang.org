const axios = require('axios');
const core = require('@actions/core');

axios.defaults.validateStatus = (status) => { return status === 200 || status === 201 || status === 202; };

const url = core.getInput('url');
const gitSHA = core.getInput('git-sha');

axios.get(url, { params: { sha: gitSHA } }).then((response) => {
    console.log(response.data);

    if (!response.data.success) {
        core.setFailed("Deployment error!\nstdout: " + response.data.stdout + "\nstderr: " + response.data.stderr);
        process.exit(1);
    }

    console.log("Deployment successful!");
}).catch((error) => {
    core.setFailed(error);
    process.exit(1);
});
