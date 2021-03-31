import React from "react";
import CounterBox from "./components/CounterBox";
import ListBox from "./components/list/ListBox";
import NumberPanel from "./components/NumberPanel";
import RegistrationForm from './components/RegistrationForm';
import AxiosGet from "./components/AxiosGet";
import './css/style.css'
import './css/form.css'

const App = () => {
    return (  
        <React.Fragment>
            <h2>State</h2>
            <CounterBox />
            <hr/>

            <h2>Props</h2>
            <NumberPanel />
            <hr/>

            <h2>List</h2>
            <ListBox />
            <hr/>

            <h2>Form</h2>
            <RegistrationForm />
            <hr/>

            <h2>Axios</h2>
            <AxiosGet />
            <hr/>

        </React.Fragment>
    );
}
 
export default App;
