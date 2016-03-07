# ng2-webpack-starter - Angular 2 Webpack starter project

This project is used in the book "Angular 2 Development with TypeScript":
https://manning.com/books/angular-2-development-with-typescript.

For detailed explanation read Chapter 10 of this book.

In short:

1. Clone the project
2. Run npm install
  

Run npm start to start the Webpack development server in development mode and serve a non-optimized application. 

Run npm run serve:dist that will run npm run build to create optimized bundles in the dist directory, 
and will start a static web server and serve the optimized version of the application. 


TODO:

- inject baseURL to index.html
- minify HTML (only css and js now)
- add support for unit tests
