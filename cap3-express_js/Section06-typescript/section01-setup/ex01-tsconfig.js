/*
    We setup our project as usual, then we enter
        tsc --init to create the tscongfig.json file

    On the tsconfig.json we make the following changes:
        - "target": "es6" => To use ES6
        - "moduleResolution": "node" (uncomment)


    NOTE: Your IDE will detect an error if there is no typescript file in the same folder as 
    app.ts, to solve this create any .ts file and restart the IDE.

    Also, you can change the root directory on tsconfig.json to solve this problem and better 
    structure your project:
        "rootDir": "./app", (uncomment)
*/
