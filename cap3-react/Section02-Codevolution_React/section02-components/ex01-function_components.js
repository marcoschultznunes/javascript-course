/* The Hello.jsx component in the components folder */
import React from 'react'

const Hello = () => <h1>Hello There</h1> // The component's name has first letter uppercase

export default Hello

// https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default

/* index.js (Keep in mind that we still haven't overwritten React's default index.js) */
import Hello from './components/hello'

ReactDOM.render(
  <React.StrictMode>
    <Hello /> {/* The Component */}
  </React.StrictMode>,
  document.getElementById('root')
); 