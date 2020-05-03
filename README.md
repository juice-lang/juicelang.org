# [juicelang.org][1]
## The repository of the *juice* website

This is the theme directory of the official website of the *juice* programming language.\
The website is generated using [October CMS][2].

### Running this website

1. You'll need a web server with PHP support and a Database. You can either download an application like [XAMPP][3],
which manages a local Apache server for you, or you install one manually.
2. Install **October CMS** according to the instructions on [their website][4].
3. Install the plugins listed in [plugins.yaml][5]. Go to the October backend (http://localhost/backend) and log in with
your admin account, registered in the installation process. Go to Settings > Updates and search for each plugin.
4. Now run the following commands to clone the theme repository:
    ```bash
    $ cd <OCTOBER_INSTALLATION_DIRECTORY>/themes
    $ git clone https://github.com/juice-lang/juicelang.org.git theme
    ```
5. The last step is to choose the new theme in the backend under Settings > Front-end theme.

### Contributing

You are very welcome to contribute to the website. If you are a native English speaker, you could e.g. help, by
correcting the grammar and style of the texts.\
If you want to propose a structural change of the website, please file an issue before a PR, where the proposal can be
discussed first, so that you don't waste your time implementing something we do not like in the end.

### Deployment

The `master` branch is automatically deployed to [staging.juicelang.org][6].\
Whenever the `master` branch is ready for the actual deployment, it gets merged into the `deploy` branch, which in its
turn automatically updates [juicelang.org][1].


[1]: https://juicelang.org
[2]: https://octobercms.com
[3]: https://www.apachefriends.org/de/index.html
[4]: https://octobercms.com/docs/setup/installation
[5]: plugins.yaml
[6]: https://staging.juicelang.org
