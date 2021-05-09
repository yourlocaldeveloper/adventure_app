# Project: A Text-Based Adventure Game

## Description

## How to play

## Installation & usage

Clone or download the repo and navigate to the root directory of this repo.

To run the client, open the terminal:   
`cd client`    
`npm install`  
`npm run dev`   

It should automatically load on 0.0.0.0:8080

To run client test suite:    
`npm run tests` 

****

To start the server and use docker compose for the api, open the terminal and run:    
`bash _scripts/startDev.sh`
- starts api
- serves api on localhost:3000

To run the server test suite:     
`bash _scripts/startTest.sh`  
- starts api
- attaches to api container and triggers full test run
- no ports mapped to local host

To teardown docker compose completely:      
`bash _scripts/teardown.sh`  

## Technologies
- HTML, CSS, JavaScript

### Dependencies: 
   - Server: cors, nodemon, express
   
   - Client: axios, file-loader, react, router-dom, react-router-dom

### DevDependencies:
   - Server: jest, nodemon, supertest
   
   - Client: babel, react-testing-library, jest

## Process 
1. Start by planning out a plan!!! Use of GitHub Projects to set up a Kanban board.
2. Create design plan in Photoshop  

## Bugs

## Changelog

### Client

### API
1. Set up server with routes, models and controllers  
2. Complete GET, POST, PATCH routes 
3. Test!

## Wins & Challenges

### Wins


### Challenges


## Code Snippet


## Future Features 


## Collaborators

[@heyaero](https://github.com/heyaero) & [@natbibi](https://github.com/natbibi)