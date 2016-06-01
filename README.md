# angular2-webpack-starter - Angular 2 Webpack starter project

This project is used in the book "Angular 2 Development with TypeScript":
https://manning.com/books/angular-2-development-with-typescript. For detailed explanation read Chapter 10 of this book.

In short:

1. Clone the project
2. Run `npm install`

`npm start` will start the Webpack development server in development mode and serve a non-optimized application.

`npm run serve:dist` will do this:
- create optimized bundles in the dist directory
- start a static web server
- serve the optimized version of the application

TODO:

- inject baseURL to index.html
