const axios = require('axios');
const core = require('@actions/core');

axios.defaults.validateStatus = (status) => { return status === 200 || status === 201 || status === 202; };

const url = core.getInput('url');
const packagistToken = core.getInput('packagist-token');

axios.post("https://packagist.org/api/update-package?username=Zollerboy1&apiToken=" + packagistToken, {
    repository: { url: "https://packagist.org/packages/juice-lang/juicelang.org" }
}, {
    headers: {
        'Content-Type': 'application/json',
    }
}).then((response) => {
    if (response.data.status !== "success") {
        core.setFailed("Packagist error: " + response.data.message);
        process.exit(1);
    }

    console.log("Packagist update successful!");
}).catch((error) => {
    core.setFailed("Error: " + error);
    process.exit(1);
});

axios.get(url).then((response) => {
    if (!response.data.success) {
        core.setFailed("Deployment error!\nstdout: " + response.data.stdout + "\nstderr: " + response.data.stderr);
        process.exit(1);
    }

    console.log("Deployment successful!");
}).catch((error) => {
    core.setFailed("Error: " + error);
    process.exit(1);
});
