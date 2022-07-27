# Fullstack Messageboard

![Chat messages](https://media.giphy.com/media/llVIK4GDgY34nQULnB/giphy.gif)

This assignment combines both frontend and backend, but with a focus on the backend

You will be building a fullstack application which serves as an online messageboard. Features of this application include a full REST API, with user data stored in a MongoDB server. Users should be able to register, login, view, create, update and delete posts.

> Important! You will be expected to use most or all of the knowledge you acquired during the backend module

> Important! This project assumes you have already completed or are close to completing the backend module

## Folder structure and preparation

There are 2 folders:

1. `/client` - this contains the `create-react-app` built React frontend
    - This will run on port `3000`

2. `/server` - this contains the backend code
    - This will run on port `3001`

## Tasks

> **Note**: Tasks are not completely detailed, they expect to rely on your judgement for most things

> **Note**: Don't forget to test your code regularly with tools such as Postman / Insomnia / or the browser developer console

### Backend

The backend is stored in the `/server` folder

The purpose of these tasks is to create a REST API which will serve the frontend

This REST API will do the following:

- allow users to view all posts
- allow users to view a single post
- allow users to register
- allow users to login
- allow users to create a new post
- allow users to edit a their previous posts
- allow users to delete previous posts

All users will be allowed to post content, but users can only modify or delete posts which they have created

The REST API will use authentication and authorisation to validate users. You will be expected to implement this.

#### Backend Tasks

1. Complete [Part 1 - Groundwork](server/BACKEND_TASKS_1.md)
2. Complete [Part 2 - Authentication / Authorisation](server/BACKEND_TASKS_2.md)

### Frontend

For the frontend, it is largely up to you how present the information to the user. You should be thinking in terms of "what features would my users want?"

The tasks are largely non-specific and should be viewed as a guide to help you structure your application. Completing this tasks on their own will not provide you a fully functioning frontend application.

This is your chance to be creative!

Good luck!

#### Frontend Tasks

Complete the [Frontend Tasks](./client/FRONTEND_TASKS.md)
