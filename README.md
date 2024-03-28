
# Blog App

This is the Assignment project for Blog Website


    
    


## Features

- **User Authentication:** Utilizes JWT (JSON Web Tokens) for secure user authentication.
- **Blog Post Creation:** Allows authenticated users to create and delete their blog posts.
- **Responsive Design:** Ensures optimal viewing experience across various devices and screen sizes.


## Tech Stack

**Client:** React, React Router, Axios, React Bootstrap

**Server:** Node, Express, MongoDB, Mongoose


## Deployment

The blog website is deployed on https://blog-app-website.vercel.app/.  Please visit the link to explore the live version of the website.


## Environment Variables


To run this project, you will need to create a .env file in backend folder add the following environment variables to your .env file

`PORT` : The port number on which the server will listen for incoming requests. By default its port 3000.

`NODE_ENV` : Set this to "development".

`JWT_SECRET` : The secret key used to sign JWT tokens for authentication.

`MONGODB_URL` : The URI of the MongoDB database.


In frontend folder create a .env file and add the following environment variables :

`VITE_BACKEND_URL` : This is the backed URL for API , if its on port 3000 set value like this `http://localhost:3000/api`


## Run Locally


1) Go to the project directory

```bash
  cd blog-project
```

2) Install dependencies for frontend and backend

```bash
  cd frontend
  npm install

  cd backend
  npm install
```

3) Start the backend server

```bash
  cd backend
  npm run dev
```

4) Start the frontend server

```bash
  cd frontend
  npm run dev
```

5) Open your browser and visit http://localhost:5173 to view the blog website locally.

