## Microservices Example
This monorepo example houses a React application and two microservices in charge of `POST`, `GET`, `PUT`, and `DELETE`
operations of individual collections and/or tables. Rather than having a monolithic server listen for requests, Now
spins 

## Microservice Structure
Now is programmed to serve the built index.js file in `api/<microservice-name>/dist/`. Make your changes to each microservice
in `api/<microservice-name>/src/`, rebuild the microservice with `npm run build` from the TypeScript source when done.

## Development Mode
`now dev` from the root of the project directory will run the entire monorepo.

## Deployment
After making changes, `now`'s diffing capabilities can be leveraged to only deploy the service(s) that have changed. From the root
of the application, run `now deploy`

## Stack
React w/ Typescript