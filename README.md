<img src="https://juicelang.org/logo" alt="juice logo" height="70">

# [juicelang.org](https://juicelang.org)

## The repository of the *juice* website

This is the official website of the *juice* programming language. The website is generated using [Jekyll](https://jekyllrb.com).

### Running this website

- If you don't have Jekyll already installed, do that following [these instructions](https://jekyllrb.com/docs/installation/).
- Clone this repository using `git`.
- Install all dependencies by running `bundle install` inside the cloned repository.
- Serve the website using `jekyll serve --watch`. This runs a web server locally which you can normally access under [https://localhost:4000](https://localhost:4000).
- If you want to test the few `php` sites of this website, you need to have an Apache server (or similar) running that points to the `_site` directory inside the cloned repository. In this case you can just let Jekyll build the website once using `jekyll build`.

### Contributing

You are very welcome to contribute to the website. If you are a native English speaker, you could help, e.g. by correcting the grammar and style of the texts (also take a look at the [documentation repository](https://github.com/juice-lang/juice-docs)). If you want to propose a structural change of the website, please file an issue before a PR, where the proposal can be discussed first, so that you don't waste your time implementing something we do not like in the end.

### Deployment

The `main` branch is automatically deployed to [staging.juicelang.org](https://staging.juicelang.org). Whenever the `main` branch is ready for the actual deployment, it gets merged into the `deploy` branch, which then automatically updates [the main website](https://juicelang.org).
