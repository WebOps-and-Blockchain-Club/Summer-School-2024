# Server for the summer school project InstiOlx

## Setup the project locally.

    - Get a postgres connection string first from `neon.tech` 
    - Create a .env file with a env variable DATABASE_URL containing the postgres connection string.
    - Use the command `npm i` to install all the dependencies.
    - Run the command `npx prisma migrate dev` to migrate all the schemas to your   Postgres database.
    - Now you're good to go, run `nodemon .\server.js` to start the server locally.
    