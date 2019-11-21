## Front End task

In the project directory, you can run:

### Details of the solution

Some details about the implementation:

- This app was bootstrapped with Create React App;
- App built as specified, not out of scope and maintaining consistency within the API consulting and the interface created;
- I've used Styled Components library that have a lot of benefits when creating small and fast applications, also the defined style was very minimalist and clean, making all components responsive;
- ESLint was configured along with Prettier to force styling and good implemetation practices, following AirBnb styleguide with some modifications and use of JSDoc on some functions;
- At the beginning I was thinking about using infinity scroll for pagination, but as I saw on the API response, there were some data that would be more correctly used with normal pagination;
- I have not used Redux because of the simplicity of the project. For the same reason I've also not used Typescript, instead, just used PropTypes for props validation;
- The use of functional components was more suitable since there are some unsafe and deprecated features with class components.

### Execution

The steps after cloning and downloading all files are:

- Make sure you have NodeJS installed;
- Within the project folder, install all dependencies with: yarn or npm install depending on the installed package manager (yarn is recommended);
- To boot the app, simply use the command yarn start;
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Thanks for this assignment, it's was very good to do it.
