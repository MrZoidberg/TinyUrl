# TinyUrl

This project implemented a integrated solution including backend server and frontend site for a tiny url site.

## What is Tiny Url?

You may check the explaination on [Wiki](https://en.wikipedia.org/wiki/TinyURL) and try it at [tinyurl.com](http://tinyurl.com/)

## Tech Stack used in this project

Server:
* Nodejs + Express
* MySQL

Client:
* Vue.js
* Bootstrap

Build Tool:
* Gulp
* Browserify

## Get started

First of all, please make sure you have installed the MySQL locally and Node locally and started MySQL service.

Then please execute the **db_init_script.sql** to create the database and relative table for this project, and make sure the username and password is correctly configed in **Server/mysqlUtil.js** file.

After that, run `npm install` to install all the dependencies needed for this project.

And please install **gulp** globally by run command:
`npm install gulp -g`

Now, you are all set. please direct your terminal to the **Server** folder and run `gulp` command. once you see the `Runing on PORT: 8000` prompt, you are able to see the site at `localhost:8000`.

Enjoy!

## Algorithm (How it works):

So what is the trick to shorten the long url into the tiny url?

Actually it is very easy and straightforward. Every time you are trying to shorten a long url, the long url is stored into the database and return a unique incremental ID. Then we may use this short ID to retrive the long url.

To make it more efficient, we use 62 base(similar to [64 base](https://en.wikipedia.org/wiki/Base64), using ASCII characters including **0-9, A-Z, a-z**) instead of 10 base, so that shorter string may stand for more urls.

## At the end

If you like this project, please star it and let me know if you want to help or contribute. Thank you.


