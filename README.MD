# Jobhub API 

FOR EDUCATION PURPOSES ONLY
#### Setup

- install dependencies

```sh
npm install
```

- create .env and provide correct values

.env

```js
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
```

- start the project

```sh
npm start
```

- you should see "Server is listening ...." text


#### Package.json

- add "dev" script with nodemon
- change engines to current version (in my case v18.15.0)

package.json

```js

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },

"engines": {
    "node": "18.15.0"
  }
```

- restart server with "npm run dev"

##### Client Folder

- let's explore client folder
- open client folder
  just base url points to our current server (instead of heroku app)

utils/axios.js

```js
const customFetch = axios.create({
  baseURL: '/api/v1',
});
```

- notice the build folder (production ready application)
- in CRA we can create build folder by running "npm run build"
- that's the one we will use for our front-end

##### Setup Front-End

- require "path" module
- setup express static (as first middleware)
  to serve static assets from client/build
- so now instead of public folder we are using client/build


- serve index.html for all routes (apart from API)
- front-end routes pick's it up from there



- navigate to localhost:5000
- clear local storage (if necessary)


#### Create Test User

- test front-end request
- in postman or front-end
- make sure email and password are the same (or change the front-end)

```js
{
    "name":"demo user",
    "email":"testUser.js@test.com",
    "password":"secret"
}
```

- navigate to client/src/pages/Register.js
- make sure email and password match your test user

```js
<button
  type='button'
  className='btn btn-block btn-hipster'
  disabled={isLoading}
  onClick={() =>
  dispatch(loginUser({ email: 'testUser.js@test.com', password: 'secret' }))}>



- default property just for fun, values will be provided by front-end

#### Setup Mock Data

- [Mockaroo](https://www.mockaroo.com/)
- create mock-data.json (root)
- provide test user id

#### Populate DB

- create populate.js

populate.js

```js
require('dotenv').config();

const mockData = require('./mock-data.json');

const Job = require('./models/Job');
const connectDB = require('./db/connect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await Job.create(mockData);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
```


#### Deploy

- remove existing git repo
- fix build folder (remove /build from client/.gitignore)
- setup new github repo
- deploy to render
