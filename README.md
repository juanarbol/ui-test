# UI candidates test v2.0

Well! I'm in love with NodeJS.

To be honest, I do not have good abilities for CSS layout, responsive layaut, but I'm not bad writing styles.


## How to run this project

1. `git checkout back-end`
2. `cd api`
3. `npm install`
4. `npm start`

__Useful endpoints:__

1. `GET /user` -> Edit user information
2. `GET /boxes`-> List all boxes to vote, this is the main feature

For adding boxes, go to `lib/Db.js` and add a new document then seed'em `node lib/Db.js`
Or you could `POST /boxes/new` with `x-www-form-url-encoded`

## Notes about my code:

> I really love Onion architecture, it's very mantenible and portable, aaand could be exploited with Node portability; NodeJS + architecture<3

> I really care about node process memory use, so every class wrote on this project in singleton for being instanced just once. 

> Reading the code, you'll find that our express API looks like Rails MVC application.

> I do not like to expose entire Mongoose model, I create wrappers (controllers) for expose only required methods, this gives me the oportunity to customize or rename them -model methods- (and for sure, It's more secure readable and testable).

> I separate the server setup and server routes for make the code more readable and easy to change

> The entire project was analyzed by N|Solid console, caring about memory heap and CPU use.

> I used ejs because is more simple and fast to render to express, I'm not quite good using WEBAPI's so.... I do not have the 
most clear code on those EJS templates.

> All views are server side rendered for performance

> I didn't had enough time to write more tests suites

> I use Standard rules as linter, they are simple and beautify my code

> On client side, y tried to use Angular with Firebase  for persistent data and realtime updates (time was not enough)
