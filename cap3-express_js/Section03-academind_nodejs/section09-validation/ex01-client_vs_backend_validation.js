/*
    Validation on the backend is mandatory, as it protects our application. Validation on the 
frontend is optional, as a hacker can bypass this validation by editing our frontend JS files
or by using Postman or Insomnia, sending the request without using our client application.

    There are 2 reasons why to also use validation on the client-side:
        1 - To reduce the number of unnecessary requests sent to the backend;
        2 - Better user experience by displaying error messages in the frontend according to the 
        user input.
*/