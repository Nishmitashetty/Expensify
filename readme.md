# Git Imp Commands 

git init -- create a new git repository(where our directory lives)

git status -- view the changes to our project code

git add -- add files to staged changes area

git commit -- Creates a new commit(savepoint) with files from staged changes area

git log -- print git commits

git remote - to view the git remotes

git remote -v - to view verbose output

---------------------------------------------------------------------------------------
# why do we set/use environment variables in our expensify project?
1.we don't wanna share our secret data so in place of that we use the env variables.
2.when we are testing we use test data base and use another database for our actual application.

# steps to set/create environment variables for development 
1.create .env.development file (reference purpose) where dev env variables exist
2.use dotenv module to read those file and set up process.env.KEYS=values
3.env variables in webpack file cannot passed into client-side-js files use 
DefinePlugin of webpack to manually pass those variables.
4.now those variables--values should be exist in our js files

-------------------------------------------------------------------------------------------
# Heroku Imp Commands
1.heroku login - to login from the heroku-commandline interface(cli)
2.heroku create  application name(optional) - creates real-time-url for our application
 and adds heroku remote to git. 
3.heroku open - to open our deployed application directly from heroku-cli
4.heroku push heroku master - to push our code from git to heroku 
5.heroku config - to view heroku environment variables
6.heroku config:set KEY=value - to set environment variables on heroku
7.heroku config:unset KEY - to unset the environment variables on heroku 
----------------------------------------------------------------------------------------------
# babel-polyfill

=> It should allows our application to be simulated/rendered/run on various browsers and it's versions...
=> polyfill adds support to browsers by internally adding some features to browsers which are initially 
   doesn't have features...

   eg:chrome older browser doesn't have includes() array method so polyfill should internally add includes() to
      browser.so our application should successfully run on that old chrome browser  