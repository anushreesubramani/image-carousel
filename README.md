Documentation:

A simple, responsive image carousel for viewing images using reactjs.
Used create-react-app to bootstrap the project and configured the other libraries on top of it.

Tech Stack:
1. React
2. Babel
3. Webpack
4. Axios
5. Styled Components
6. Jest
7. enzyme
8. Eslint
9. Prettier

To run the app, do the following steps:
1. Unzip the folder 
2. Navigate into the folder path via command line.
3. Run 'yarn install' command
4. Once the dependencies install, run 'yarn start' command to run the app in development mode.
5. Open localhost:3000 in your browser to see the app.

Implementation aspects:
* Code structure, quality and consistency

Modular approach by splitting the app into small components. 
Each component is a separate folder which contains its related files all in one place. 
Used ES6/7 extensively throughout the app. 
Used eslint and prettier for maintaining coding best practices and standards.
 
* Technology choices

From experience, extensive research and by listening to feedback from the javascript community, have chosen the above mentioned tech stack as I consider them to one of the best choices for getting the job done.

* Accessibility

Wrote semantic HTML and followed basic accessibilty rules like providing alt text for images etc.
 
* Cross browser compatibility 

Configured browserslist to support last 2 versions of all browsers and so it will automatically take care of adding the necessary polyfills for maintaining uniform cross browser support.

* Responsiveness

Added eventlistener for window resize event which will appropriately change the number of images displayed based on the screen width and make the app responsive.

* Attention to detail

Have tried to make the app look and perform better and as close to requirement as possible.

* Clear documentation

Provided the necessary steps to run the app clearly and the tech stack involved.

* Dependency management

Used yarn for managing package dependencies

* Test quality

Tried to cover as many test scenarios as possible in the limited time 

* Git commit history

Maintained a git workflow throughout the process of building the app by committing periodically and by writing good commit messages.
Main branch -> master
feature -> feature/name
bugfix -> bugfix/name
enhancement -> enhancement/name


Things to improvise or things I would have done if I had more time:
1. Write more tests to cover more scenarios
2. Add animation to the carousel
3. Bugfixes(if any)
4. Improve accessibilty by allowing users to navigate carousel through keyboard arrow keys
5. Refactor the components
6. Preload the images in the carousel for better performance.
7. Make it more configurable and publish it as an npm package ;)



