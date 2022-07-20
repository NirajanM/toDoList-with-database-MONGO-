# toDoList-with-database-MONGO-
# basic-guide:
you should have node.js, and mongoDB installed in your device,
atfirst after cloning this repository on your local computer, go to this project path in terminal and type : 
git i
to install all the required node modules dependencies,
open three shells,
start mongo in one by command : mongo
start mongod in another by command : mongod
start the server with the command:
node app.js or if you have nodemon installed consider "nodemon app.js" instead
then go to localhost:3000
and boom! to do list web app with everything working.

# about-app:
your current date will be generated as heading and you can add your todolist, it will be added to database by creating new db test, inside test - items, you can check local collections and documents from mongo shell parallelly

tick the checkbox to delete the to do item from db(logic used: targeted id and deleted using model api of mongoose)
play around with database XD, have fun 