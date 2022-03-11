This application is a CRUD of the users table with the structure of the following api [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).


Before running the application clone the repository with `https://github.com/jrdnbrj/antpack_techtest`.


To run this application it is necessary to run the server-side and the client-side.

For the server it is necessary to enter the api folder and have a connection string to a mongo database and put it in the .env file at the root of the api folder, in this file it is also possible to change the port where it will be loaded

To install all dependencies you need to run `npm i`.
To run the server in development mode with nodemon you need to run `npm run dev`.
And in the console it will show the port where it is running and if it successfully connected to the database.

For the client, you must enter to the client folder, in another console install the dependencies with `npm i` and finally run it with `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
