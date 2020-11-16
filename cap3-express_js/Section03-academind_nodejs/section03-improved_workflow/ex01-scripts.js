/*
    We can use npm init (-y to skip) to create the package.json file to an already existing 
project, without losing what's already been created. NPM has some default scripts which we
can configure and call it, such as npm start. But our custom scripts, we must call with:
    npm run {name of the script}

    On installing packages, they can be divided into 2 categories: development and 
production. We can specify it in our install commands to which of the 2 to save, but this
is useful only for organizing, as it does not imply in any significant changes to the 
project.
    npm install --save-dev => save as development package
    npm install --save => save as production package (default)

    npm install -g => global package

*/