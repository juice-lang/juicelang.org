# [juicelang.org][1]
## The repository of the *juice* website

This is the theme directory of the official website of the *juice* programming language.\
The website is generated using [October CMS][2].

### Running this website

#### Prerequisites

- A web server with PHP 7 support and a database, you can either download an application like [XAMPP][3], which manages
a local Apache server for you, or you install one manually.
- You should create an empty database, and a user with all privileges granted on that database.
- Also, you'll need Composer installed.\
  If you develop on macOS and have [Homebrew][4] installed, you can run
  
  ```bash
  $ brew install composer
  ```
  
  On many Linux distributions you get Composer through apt:
  
  ```bash
  $ sudo apt install composer
  ```
  
  Otherwise, you can find an installation guide [here][5].
  
  The placeholder `<COMPOSER_COMMAND>` is used in the following section. If you installed composer through brew or
  apt, it should be `composer`, otherwise `php /path/to/composer.phar`.

#### Installation

1. Install OctoberCMS into your server's webroot (or a subdirectory thereof).\
   Run the following commands:
   
   ```bash
   $ cd <INSTALLATION_DIRECTORY>
   $ <COMPOSER_COMMAND> create-project october/october .
   $ php artisan october:install
   ```
   
   You will be guided through the OctoberCMS installation.

2. Open the file `config/cms.php` in your text editor of choice and change the line
   
   ```php
   'disableCoreUpdates' => false,
   ```
   
   to
   
   ```php
   'disableCoreUpdates' => true,
   ```
   
   This is unfortunately a needed step in the OctoberCMS Composer installation.

3. Add the juicelang.org theme as a requirement to Composer.
   
   ```bash
   $ <COMPOSER_COMMAND> require juice-lang/juicelang.org:dev-master
   ```
   
   This will install the theme alongside all needed plugins.
   
4. Switch to the installed theme.
   
   ```bash
   $ php artisan theme:use juicelang.org
   ```
   
Now everything should be set up for use and development.\
It's likely however, that you get an error like the following on upon first open of the website.

```
The stream or file "/path/to/storage/logs/system.log" could not be opened: failed to open stream: Permission denied
```

You can fix this by changing the file owners and permissions of the `storage` directory.\
First you want to know the webserver username. On an apache server you can use this command to find it out:

```bash
$ ps aux | egrep '(apache|httpd)'
```

You should see some lines starting with the usernames, which started the apache processes. Normally you search for
something like `www-data` or `_www`.

Now set the owner group of the `storage` directory to this name (You'll need root access to do so).\
Also set the permissions to 775.

```bash
$ sudo chown -R $USER:<FOUND_USERNAME> storage
$ chmod -R 775 storage
```

After you've done that, everything should work now.

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
[4]: https://brew.sh
[5]: https://getcomposer.org/download/
[6]: https://staging.juicelang.org
