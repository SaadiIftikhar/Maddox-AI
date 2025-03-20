# Sample Web Application for End-to-End Testing


## Introduction
You are given a simple web application that has the following features:
- A login page where users can enter their username and password to login
- A home page where users can see a counter and perform the following actions:
  - Increment the counter
  - Decrement the counter
  - Reset the counter
  - Logout

## Your Task
As a QA Engineer, your task is to 
1. write end-to-end tests for the application and 
2. set up a CI/CD pipeline to automate the testing process.

### 1. Writing end-to-end tests

Your task is to write end-to-end tests for the application using [Playwright](https://playwright.dev/) or any other end-to-end testing framework of your choice. The tests should cover the following scenarios:

#### Test 1
Test the login flow of the application. The test should:
- Visit the login page
- Enter the username and password
- Click the login button
- Verify that the user is redirected to the home page if the login is successful
- Verify that the user sees an error message if the login is unsuccessful

#### Test 2
Test the counter functionality of the application. The test should:
- Visit the home page
- Verify that every click on the increment button increments the counter value by 1
- Verify that every click on the decrement button decrements the counter value by 1
- Verify that the reset button resets the counter value to 0

#### Test 3
Test the logout functionality of the application. The test should:
- Visit the home page
- Logout the user
- Verify that the user is redirected to the login page
- Verify that the user cannot access the home page and is redirected to the login page if not logged in


### 2. Setting up a CI/CD pipeline

After writing the tests, set up a simple a CI/CD pipeline using GitHub Actions, GitLab CI, or any other CI/CD tool of
your choice to run the tests on every push to the repository

## Deliverables for the interview
1. A link to the repository containing the code for the tests
2. A link to the CI/CD pipeline that runs the tests

During the interview, you will be asked to run the tests and explain your thought process. We will also provide you with
a buggy version of the application to check whether your tests can catch the bugs. <br> Happy coding! 🚀




## Getting Started
This project was bootstrapped with [Next.js](https://nextjs.org/). Below you will find some information on how to perform common tasks.
The dummy credentials for the login page are:
- Email: test@maddox123.ai
- Password: supersecure

### Installing dependencies

```
npm install
# or
yarn install
```

### Running the development server
```
npm run dev
# or
yarn dev
```

### Building the project and serving a production build
```
npm run build && npm run start
# or
yarn build && yarn start
```