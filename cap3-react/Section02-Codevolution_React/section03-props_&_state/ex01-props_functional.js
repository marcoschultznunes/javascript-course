/*
    Props are immutable.
    To maintain changeable data, we use hooks (functional components) and state (class)
*/

/* The Email.jsx component */
import React from 'react'

const Email = (props) => {
    const { from, to, subject } = props

    return (
        <React.Fragment>
            <div>
                <h3>From: {from}</h3>
                <h3>To: {to}</h3>
                <h3>Subject: {subject}</h3>
                {props.children}
            </div>
            <hr/>
        </React.Fragment>
    )
}

/* index.js */
import Email from './components/section03/Email'

ReactDOM.render(
  <React.StrictMode>
    <Email from="Toni Tortoni" to="Toni du Panetoni" subject="Panetoni">
      <p><i>Toni du Panetoni, por che criaste il Panetoni?</i></p>
    </Email>
    <Email from="Toni du Panetoni" to="Toni Tortoni" subject="RE: Panetoni">
      <p><i>Toni du Tortoni, il criaste il Panetoni por che il soi il Toni du Panetoni.</i></p>
    </Email>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
    Class components can also have props, which are accessed with this.props.
*/