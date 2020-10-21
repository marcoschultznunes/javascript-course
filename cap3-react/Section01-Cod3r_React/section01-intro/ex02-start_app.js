/*
    Navigate to the project, and use npm start, just like express, to start the 
    application.

    React's default port is 3000.


    There is a possible error when starting the application that goes like this:
        Error: ENOSPC: System limit for number of file watchers reached

    This errors is a linux error that can simply be solved by increasing/defining the maximum
    number of file watchers. This command on a terminal does the trick:
        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


    Source: https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached
*/