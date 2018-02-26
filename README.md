# WiZR Challenge 2

**Welcome to the second and final coding challenge!**

This challenge is designed to show off your frontend skills and creativity. You are not expected to complete every aspect of this challenge. Instead, you are encouraged to focus on areas that you feel represent your greatest strengths as a developer.

## Intro

In this challege we will be building out a basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app. Since you have already completed our login challenge, this project will not focus on authentication. All actions and requests in this project will assume that a user is already authenticated or that no login is neccesary.

Our project for this app is to create a simple photo feed application (e.g [Unsplash](https://unsplash.com), from which the api data for this project was taken).

Our app was scaffolded out using [`create-react-app`](https://github.com/facebook/create-react-app). We would also like to make use of [`react-router`](https://github.com/ReactTraining/react-router) and [`react-redux`](https://github.com/reactjs/react-redux) within our application.

#### Useful Documentation

- Official React Docs: https://reactjs.org
- Redux Documentation: https://redux.js.org
- react-redux: https://github.com/reactjs/react-redux
- react-router: https://github.com/ReactTraining/react-router

#### API Details

We are using  [`json-server`](https://github.com/typicode/json-server) to generate the api responses. The API is running on port 3001, but [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) requets from within the app will be proxied to the `/api` endpoint within the app.

##### Endpoints

| Path                    | Description                          | Supported Methods                                            |
| ----------------------- | ------------------------------------ | ------------------------------------------------------------ |
| `/api/me`               | Logged in user's profile             | `GET` - Retreive profile data<br />`PATCH` - Udate data with payload |
| `/api/users`            | List all users                       | `GET`                                                        |
| `/api/users/:userId`    | Retrieve specific user               | `GET`                                                        |
| `/photos`               | List all photos                      | `GET`                                                        |
| `/photos/:photoId`      | Individual Photo                     | `GET` - Retrieve photo data<br />`PATCH` - Update like status with payload `{liked_by_user: true || false}` |
| `/photos/liked`         | List of photos you have liked        | `GET`                                                        |
| `/users/:userId/photos` | List photos created by specific user | `GET`                                                        |

## Your Mission

We would like you to attempt to build out our photo app. This is intentionally a fairly open-ended exercise. Don't worry if you can't work out every little detail and feature. Focus on the features that you feel show off your strengths best. Also, the design doesn't need to be a work of art, but we would like you to think about how you would organize the UI in the sections you work on. The following are the details of what we would like to see in your sample app.

#### Essential Functionality

- View photo feed
- View all users
- User detail page
- Top-level navigation that allows access to relevant sections

#### Nice to Have

- Pagination of photo feed (see [json-server]() docs for pagination parameters)
- Ability to like or unlike a photo
- Ability to see a list of photos you have liked
- Show user's photos in user detail page
- Ability to edit current user's profile
- Define automated tests

#### Extra Credit

- Only load images when they are visible in the viewport
- Make use of modern CSS techniques such as Flexbox/Grid or CSS transitions/animations
- Fade/animate between routes/views

## Evaluation

You will be evaluated on the quality of the code you submit. Key factors to keep in mind are:

#### Functionality

- Does your code work?
- Are there any edge cases that may need to be accountyed for?
- If an error may arise, is it handled gracefully?
- Is your code performant?

#### Code organization

- How easy is it to understand your code.
- Are your abstractions consistent
- Do similar processes follow similar patterns
- Is there a minimal amount of repetition of very-similar types of code?

#### Clarity/Formatting

- Are things named clearly and consistently
- Is the purpose of a specific piece of code self-evident?
- Does your code follow consistent formatting, indentation, spacing, etc.

## Final Notes

As mentioned previously ,don't worry if you are unable to finish up every detail. We realize that time is limited and very much appreciate you taking the time to work on this for us. Focus on the things you do well and don't stress over other minor details.

This repo also includes a [NOTES.md](NOTES.md) file. Please feel free to leave any notes there for us. Tell us about your thought process, any known issues in your code, or any feedback that you have for us.

Good luck!