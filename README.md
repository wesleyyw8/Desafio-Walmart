# Desafio-Walmart
1 - Go to nodejs.org and download v4.3.0 lts version of nodejs and install it.
2 - Go to https://git-scm.com/downloads and download git 2.7.1 and install it.
3 - git clone https://github.com/wesleyyw8/Desafio-Walmart.git
4 - npm install package.json
5 - bower install -g bower
5.1 - cd ui
5.2 - bower install
6 - go to https://www.mysql.com/ and download mysql database
6.1 - install mysql and set the password of the root user as 1234
6.2 - at mysql/bin folder type 'mysql -u root -p 1234'
6.3 - source script.sql
7 - Open up Nodejs Prompt and type "node server.js"
if you receive a message "We have started our server on port 3000!" you did it! just type localhost:3000 on your browser!


Im using nodejs as a server because it has javascript syntax so it is easier for me. 
Bower.json is a package manager for UI libraries and framewroks in the other hand package.json is for nodeJS modules.
Im using angularJS because it is a powerfull framework and I have a lot of experience with it. It wouldnt be necessary to use angularjs to develope this website but it makes things easier if I need to change something in the future! 
Im using less for styling because the hierarchy of elements and Koala to transform it in css.
Im using grunt to join all of the javascript files and all of the css files. So I just need to include 2 files on index.html. I also parse less to css using Grunt.


Testing the UI
npm install -g protractor
webdriver-manager update
webdriver-manager start
protractor protactorScript.js

There's no much to test so it will click all of the links of the navbar to check if the title of the page macthes with the expected name.