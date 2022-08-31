const axios = require('axios');
const core = require('@actions/core');

axios.defaults.validateStatus = (status) => { return status === 200 || status === 201 || status === 202; };

const url = core.getInput('url');
const authUser = core.getInput('auth-user');
const authPassword = core.getInput('auth-password');

const config = {
    params: {},
    auth: {
        username: authUser,
        password: authPassword
    }
};

(async () => {
    try {
        const response = await axios.get(url, config);
        console.log(response.data);

        if (!response.data.success) {
            throw new Error("Deployment error!\nstdout: " + response.data.stdout + "\nstderr: " + response.data.stderr);
        }

        console.log("Deployment successful!");
    } catch (e) {
        core.setFailed(e.message);
        process.exit(1);
    }
})();
