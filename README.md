# DEV

Second install from the package.json all dependencies via npm or yarn [yarn installation guide](https://yarnpkg.com/lang/en/docs/install/)

### `npm i`

or

### `yarn`

Run JSON Server on port 5000

### `json-server --watch -p 5000 ./src/mock/db.json`

Runs the app in the development mode

### `npm run start`

or

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# PROD

## Docker

Example usage, In the project directory.
Build the docker image:

### `docker build . -t movies-app`

Check if image exist:

### `docker ps`

Run docker and server NGINX

### `docker run -p 8000:80 movies-app`

Go to web browser localhost:8000

## Prod ready to be deployed

### `yarn build:tsc-format-lint-test`

First is checked types, prettier format, eslint and all tests if all is success then start builds the app for production to the `build` folder.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## TESTS

### `yarn test`

Run test watch mode

### `yarn test:once`

Run tests once

### `yarn test:ci`

Run test CI mode

