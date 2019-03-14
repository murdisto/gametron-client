[![Netlify Status](https://api.netlify.com/api/v1/badges/bbb9764f-a995-4807-a6a9-7b675f052c9f/deploy-status)](https://app.netlify.com/sites/gametron/deploys)




## About
  Gametron is a web application that helps people to gamify their lives. 

## Screenshots
<img src="screenshots/gametron.png" alt="sign in" width="800px" />
<br />
<img src="screenshots/gametronmob.png" alt="" width="400px" />


## Links
- [Client Repo](https://github.com/murdisto/gametron-client)
- [Server Repo](https://github.com/murdisto/gametron-server)
- [Deployed Client](https://gametron.netlify.com/)

## API Overview
```        
├── /auth
│   └── POST
│       ├── /login
│       ├── /refresh
├── /users
│   └── POST /
│   └── GET
│       ├── /:id
├── /games
│   └── GET
│       ├── /
│       ├── /:id
│   └── POST /
│   └── PUT /:id
│       ├── /join/:id
│       ├── /leave/:id
│       ├── /scores/:id
│   └── DELETE /:id
├── /posts
│   └── GET /
│       ├── /:id
│   └── POST /
│   └── PUT /:id
│   └── DELETE /:id
├── /image-upload
│   └── POST /
├── /email
│   └── POST /
│   └── GET /confirm/:id
``` 

## Development Stack
**Front End:**
  - React
  - Redux
  - CSS

**Back End:**
  - Express
  - Passport
  - MongoDB
  - Mongoose

**Testing:** 
  - Mocha
  - Chai
  - Enzyme



